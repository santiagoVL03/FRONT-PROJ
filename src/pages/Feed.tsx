import Post from '../components/Post';
function Feed() {
  return (
    <div className="flex items-center justify-center">
        <div className="max-w-md w-full">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}

export default Feed