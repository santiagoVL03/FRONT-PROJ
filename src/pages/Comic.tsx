import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

type Chapter = {
  id: string;
  attributes: {
    chapter: string;
    title: string;
    readableAt: string;
  };
};

type MangaInfo = {
  title: string;
  description: string;
  coverUrl: string;
  author: string;
  chapters: Chapter[];
};



function Comic() {
  const { mangaTitle } = useParams(); // URL param: /comic/:mangaTitle
  const [manga, setManga] = useState<MangaInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMangaData() {
      try {
        const baseUrl = "https://api.mangadex.org";

        // 1. Buscar el manga
        const mangaRes = await axios.get(`${baseUrl}/manga`, {
          params: {
            title: mangaTitle,
            limit: 1,
            originalLanguage: ["ja"],
            availableTranslatedLanguage: ["en"],
            includes: ["cover_art", "author"],
          },
        });

        const mangaData = mangaRes.data.data[0];
        const mangaId = mangaData.id;
        const attributes = mangaData.attributes;

        const title = attributes.title.en || "Sin título";
        const description =
          attributes.description.en ||
          "No hay descripción disponible para este manga.";

        const authorRel = mangaData.relationships.find(
          (rel: { type: string }) => rel.type === "author"
        );
        const author = authorRel?.attributes?.name || "Autor desconocido";

        const coverRel = mangaData.relationships.find(
          (rel: { type: string }) => rel.type === "cover_art"
        );
        const coverFile = coverRel?.attributes?.fileName;
        const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverFile}`;

        // 2. Obtener lista de capítulos
        const chaptersRes = await axios.get(
          `${baseUrl}/manga/${mangaId}/feed`,
          {
            params: {
              translatedLanguage: ["en"],
              order: { chapter: "asc" },
              limit: 20,
            },
          }
        );

        const chapters = chaptersRes.data.data;

        setManga({
          title,
          description,
          coverUrl,
          author,
          chapters,
        });
      } catch (err) {
        console.error("Error al cargar datos del manga:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMangaData();
  }, [mangaTitle]);

  if (loading) {
    return <div className="text-white text-center my-8">Cargando cómic...</div>;
  }

  if (!manga) {
    return <div className="text-red-400 text-center my-8">Manga no encontrado.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-900 shadow-lg rounded-2xl text-white">
      <img
        src={manga.coverUrl}
        alt="Portada del cómic"
        className="w-full rounded-xl mb-4 shadow-lg object-cover h-96 max-h-96"
      />
      <h1 className="text-4xl font-bold mb-2">{manga.title}</h1>
      <p className="text-gray-400 mb-2">Autor: {manga.author}</p>
      <p className="text-gray-300 mb-6">{manga.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Capítulos</h2>
      <ul className="space-y-2">
        {manga.chapters.map((chapter: Chapter) => (
          <li
            key={chapter.id}
            className="bg-gray-800 p-3 rounded-xl shadow hover:bg-gray-700 cursor-pointer transition"
            onClick={() => navigate(`/chapter/${chapter.id}`)}
          >
            <p className="font-semibold">
              Capítulo {chapter.attributes.chapter || "?"}:{" "}
              {chapter.attributes.title || "Sin título"}
            </p>
            <p className="text-gray-400 text-sm">
              Publicado:{" "}
              {new Date(chapter.attributes.readableAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comic;
