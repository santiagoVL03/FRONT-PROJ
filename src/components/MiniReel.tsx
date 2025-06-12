function MiniReel({ username, imageId, reelTitle }: { username: string; imageId: number; reelTitle: string }) {
    return (
        <div className='bg-gray-600 hover:bg-gray-700 p-2 rounded-lg shadow cursor-pointer transition'>
            <div className="text-white text-sm font-semibold mb-1">
                {reelTitle}
            </div>
            <div className="text-gray-400 text-xs mb-2">
                by {username}
            </div>
            <img
                src={`https://picsum.photos/seed/comic${imageId}/100/150`} alt="comic-reel"
                className="w-full h-28 object-cover rounded"
            />
        </div>
    )
}

export default MiniReel
