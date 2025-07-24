import MiniReel from '../components/MiniReel';
import MangaCustomPost from '../components/Post/MangaCustomPost';
import MangaPost from '../components/Post/MangaPost';
import MiniUploadPost from '../components/Post/MiniUploadPost';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface MangaPostData {
  title: string;
  author: string;
  description: string;
  id_manga: string;
}

function Feed() {
  const Reels = [
    { user: "@leo", imageId: 213, title: "Reel 1" },
    { user: "@maria", imageId: 272, title: "Reel 2" },
    { user: "@jose", imageId: 221, title: "Reel 3" },
    { user: "@ana", imageId: 14, title: "Reel 4" },
    { user: "@carlos", imageId: 25, title: "Reel 5" },
    { user: "@luis", imageId: 361, title: "Reel 6" },
  ];

  const mangas = [
    { manganame: "bocchi" },
    { manganame: "kawai" },
    { manganame: "attack on titan" },
    { manganame: "boku no" },
    { manganame: "my life" },
  ];

  const [mangaPosts, setMangaPosts] = useState<MangaPostData[]>([]);

  async function get_metadata_for_mangas() {
    try {
      const result = await axios.get('http://localhost:5000/api/v1/get_feed_mangas', {
        timeout: 30000 // 10 segundos
      });
      console.log("Manga metadata fetched successfully:", result.data);
      return result.data.data;
    } catch (error) {
      console.error("Error fetching manga metadata:", error);
      return { comics: [] };
    }
  }

  useEffect(() => {
    get_metadata_for_mangas()
      .then((data: { comics: { title: string; author: string; content: string; comic_id: string }[] }) => {
        console.log("Fetched manga data:", data);
        const comics = data.comics || [];
        console.log("Comics data:", comics);
        const posts = comics.map((manga) => ({
          title: manga.title, // antes era manga.name
          author: manga.author,
          description: manga.content, // antes era manga.description
          id_manga: manga.comic_id, // antes era manga.id_manga
        }));
        console.log("Manga posts:", posts);
        setMangaPosts(posts);
      })
      .catch((error) => {
        console.error("Error fetching manga data:", error);
      });
  }, []);

  return (
    <div className="items-center justify-center">
      <div className="w-full mb-4">
        <div className="grid grid-cols-3 gap-4">
          {Reels.map((reel, index) => (
            <MiniReel key={index} username={reel.user} imageId={reel.imageId} reelTitle={reel.title} />
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <MiniUploadPost />
      </div>

      <div className="max-w-md w-full" id="manga-posts">
        {mangaPosts.map((manga, index) => (
          console.log("Static manga post:", manga.title),
          <MangaCustomPost
            key={`custom-${index}`}
            manganame={manga.title}
            author={manga.author}
            description={manga.description}
            image_id={manga.id_manga}
          />
        ))}

        {mangas.map((manga, index) => (
          <MangaPost key={`static-${index}`} manganame={manga.manganame} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
