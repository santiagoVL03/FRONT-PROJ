import MiniComic from './MiniComic';

function ComicCollection() {
  const comics = [
    { id: 1, title: 'Comic One', username: 'user1' },
    { id: 2, title: 'Comic Two', username: 'user2' },
    { id: 3, title: 'Comic Three', username: 'user3' },
    { id: 4, title: 'Comic Four', username: 'user4' },
    { id: 5, title: 'Comic Five', username: 'user5' },
  ]
  return (
    <div className="mt-6">
      <h3 className="text-white font-bold text-lg mb-4">Sugerencias para leer</h3>
      <div className="grid grid-cols-2">
        {comics.map((comic) => (
          <MiniComic
            key={comic.id}
            username={comic.username}
            imageId={comic.id}
            comicTitle={comic.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ComicCollection;
