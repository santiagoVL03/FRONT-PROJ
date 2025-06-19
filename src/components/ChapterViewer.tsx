import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ChapterViewer() {
  const { chapterId } = useParams();
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChapterPages() {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.mangadex.org/at-home/server/${chapterId}`);
        const { baseUrl, chapter } = res.data;

        const images = chapter.data.map(
          (filename: string) => `${baseUrl}/data/${chapter.hash}/${filename}`
        );

        setPages(images);
      } catch (error) {
        console.error("Error al cargar el capítulo:", error);
      } finally {
        setLoading(false);
      }
    }

    if (chapterId) {
      fetchChapterPages();
    }
  }, [chapterId]);

  if (loading) {
    return <div className="text-white text-center my-8">Cargando capítulo...</div>;
  }

  if (pages.length === 0) {
    return <div className="text-red-400 text-center my-8">No se encontraron imágenes.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900 text-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Lectura del capítulo</h1>
      <div className="space-y-4">
        {pages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Página ${i + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default ChapterViewer;
