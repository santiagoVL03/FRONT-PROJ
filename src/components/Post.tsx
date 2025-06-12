import { Heart, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Post({ username, imageId, description }: { username: string; imageId: number, description?: string }) {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/comic`);
  };
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-md overflow-hidden my-4 border border-gray-900 text-white">
      <div className="flex items-center px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={`https://picsum.photos/seed/user${imageId}/100/100`}
          alt="user"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold text-white">{username}</p>
        </div>
      </div>

      <img
        onClick={handleImageClick}
        className="w-full object-cover"
        src={`https://picsum.photos/seed/post${imageId}/600/400`}
        alt="post"
      />

      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-4">
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-500" />
          <Send className="w-6 h-6 cursor-pointer hover:text-green-500" />
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-sm">
          <span className="font-semibold mr-1">{username}</span>
          {description || "This is a sample post description. It can be anything you want to share with your followers."}
        </p>
      </div>
    </div>
  );
}

export default Post;
