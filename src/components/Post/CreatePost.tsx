import { useState, type ChangeEvent, type FormEvent } from 'react';
import axios from 'axios';

interface ComicDetails {
    title: string;
    author: string;
    description: string;
    date_uploaded: string;
    comic_id: string;
}

interface UploadPayload {
    comic_details: ComicDetails;
    cover: string;   // base64
    content: string; // base64
}

interface UploadResponse {
    data: {
        message: string;
    };
}

export default function CreatePost() {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [contentFile, setContentFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                resolve(result.split(',')[1]); // remove data:image/...;base64,
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!coverFile || !contentFile) {
            setMessage('Por favor selecciona ambos archivos.');
            return;
        }

        try {
            const coverBase64 = await handleFileToBase64(coverFile);
            const contentBase64 = await handleFileToBase64(contentFile);

            const comicDetails: ComicDetails = {
                title,
                author,
                description,
                date_uploaded: new Date().toISOString().split('T')[0],
                comic_id: crypto.randomUUID(),
            };

            const payload: UploadPayload = {
                comic_details: comicDetails,
                cover: coverBase64,
                content: contentBase64,
            };

            const response = await axios.post<UploadResponse>(
                'http://localhost:5000/api/v1/upload_new_comic',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setMessage(response.data.data.message || '¡Cómic subido con éxito!');
        } catch (error) {
            console.error(error);
            setMessage('Error al subir el cómic.');
        }
    };

    const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setCoverFile(file);
    };

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setContentFile(file);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Subir nuevo cómic</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 outline-none"
                    required
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 outline-none"
                    required
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 outline-none"
                    rows={3}
                    required
                />
                <div>
                    <label className="block text-sm mb-1">Portada (imagen)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverChange}
                        className="w-full text-sm text-gray-300 bg-gray-700 p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm mb-1">Contenido (PDF/ZIP)</label>
                    <input
                        type="file"
                        onChange={handleContentChange}
                        className="w-full text-sm text-gray-300 bg-gray-700 p-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 w-full py-2 rounded text-white font-semibold transition"
                >
                    Subir cómic
                </button>
                {message && <p className="mt-4 text-center text-sm text-green-400">{message}</p>}
            </form>
        </div>
    );
}
