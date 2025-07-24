import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";

type MangaPostProps = {
  manganame?: string; // nombre del manga a buscar
};

function MangaPost({ manganame = "Naruto" }: MangaPostProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://api.mangadex.org";

  useEffect(() => {
    async function fetchMangaPages() {
      try {
        setLoading(true);

        const mangaResponse = await axios.get(`${baseUrl}/manga`, {
          params: {
            title: manganame,
            limit: 1,
            originalLanguage: ['ja'],
            availableTranslatedLanguage: ['en'],
          },
        });

        const mangaData = mangaResponse.data.data;
        if (!mangaData || mangaData.length === 0) {
          console.warn("No se encontró el manga");
          setPages([]);
          return;
        }

        const mangaId = mangaData[0].id;

        const chapterResponse = await axios.get(`${baseUrl}/manga/${mangaId}/feed`, {
          params: {
            translatedLanguage: ['en'],
            order: { chapter: 'asc' },
            limit: 1,
          },
        });

        const chapterData = chapterResponse.data.data;
        if (!chapterData || chapterData.length === 0) {
          console.warn("No se encontró un capítulo traducido al inglés");
          setPages([]);
          return;
        }

        const chapterId = chapterData[0].id;

        const atHomeResponse = await axios.get(`${baseUrl}/at-home/server/${chapterId}`);
        const { baseUrl: imgBaseUrl, chapter } = atHomeResponse.data;

        const imageUrls = chapter.data.map(
          (filename: string) => `${imgBaseUrl}/data/${chapter.hash}/${filename}`
        );

        setPages(imageUrls);
      } catch (err) {
        console.error("Error al obtener imágenes de MangaDex:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMangaPages();
  }, [manganame]);

  if (loading) {
    return <div className="text-white text-center my-4">Cargando manga...</div>;
  }

  if (pages.length === 0) {
    return <div className="text-red-400 text-center my-4">No se encontraron páginas</div>;
  }

  return (
    <Post
      username={`@${manganame}`}
      description={`Primer capítulo de ${manganame}`}
      pages={pages}
      from="manga"
    />
  );
}

export default MangaPost;
