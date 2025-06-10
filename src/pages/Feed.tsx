import Post from '../components/Post';
function Feed() {
  const posts = [
    { user: "@leo", imageId: 101, description: "Just enjoying the day!" },
    { user: "@maria", imageId: 202, description: "Loving this weather!" },
    { user: "@jose", imageId: 303, description: "Can't wait for the weekend!" },
    { user: "@ana", imageId: 404, description: "Exploring new places!" },
    { user: "@carlos", imageId: 505, description: "Foodie adventures!" },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full">
        {posts.map((post, index) => (
          <Post key={index} username={post.user} imageId={post.imageId} description={post.description} />
        ))}
      </div>
    </div>
  )
}

export default Feed