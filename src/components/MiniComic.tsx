function MiniComic({ username, imageId, comicTitle }: { username: string; imageId: number; comicTitle: string }) {
  return (
    <div className="bg-gray-800 hover:bg-gray-900 p-2 rounded-lg shadow cursor-pointer transition">
      <img
        className="w-full h-28 object-cover rounded"
        src={`https://picsum.photos/seed/comic${imageId}/100/140`}
        alt="comic"
      />
      <div className="mt-2">
        <p className="text-white text-sm font-semibold truncate">{comicTitle}</p>
        <p className="text-gray-400 text-xs truncate">by {username}</p>
      </div>
    </div>
  );
}

export default MiniComic;
