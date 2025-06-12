import MiniReel from '../components/MiniReel';
import Post from '../components/Post';
function Feed() {
  const posts = [
    { user: "@leo", imageId: 101, description: "Just enjoying the day!" },
    { user: "@maria", imageId: 202, description: "Loving this weather!" },
    { user: "@jose", imageId: 303, description: "Can't wait for the weekend!" },
    { user: "@ana", imageId: 404, description: "Exploring new places!" },
    { user: "@carlos", imageId: 505, description: "Foodie adventures!" },
  ];
  const Reels = [
    { user: "@leo", imageId: 213, title: "Reel 1" },
    { user: "@maria", imageId: 272, title: "Reel 2" },
    { user: "@jose", imageId: 213, title: "Reel 3" },
    { user: "@ana", imageId: 14, title: "Reel 4" },
    { user: "@carlos", imageId: 25, title: "Reel 5" },
    { user: "@luis", imageId: 361, title: "Reel 6" },
  ]

  return (
    <div className="items-center justify-center">
      <div className="w-full mb-4">
        <div className="grid grid-cols-3 gap-4">
          {Reels.map((reel, index) => (
            <MiniReel key={index} username={reel.user} imageId={reel.imageId} reelTitle={reel.title} />
          ))}
        </div>
      </div>
      <div className="max-w-md w-full">
        {posts.map((post, index) => (
          <Post key={index} username={post.user} imageId={post.imageId} description={post.description} />
        ))}
      </div>
    </div>
  )
}

export default Feed