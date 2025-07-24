import { Heart, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Post({
  username,
  imageId,
  imageIdS, // Para CustomPost
  description,
  pages,
  from = 'post', // 'post' or 'manga' or 'custom-post'
  manganame,
}: {
  username: string;
  imageId?: number;
  imageIdS?: string;
  description?: string;
  pages?: string[];
  from?: 'post' | 'manga' | 'custom-post' | 'manga-custom-post';
  manganame?: string;
}) {
  const navigate = useNavigate();
  const handleImageClick = () => {
    const cleanUsername = username.replace(/^@/, "");
    navigate(`/comic/${cleanUsername}`);
  };

  function render_content() {
    if (from === 'manga') {
      return pages && pages.length > 0 ? (
        pages.map((src, index) => (
          <img key={index} className="w-full" src={src} alt={`Page ${index + 1}`} />
        ))
      ) : (
        <p className="text-center text-gray-500">No pages available.</p>
      );
    } else if (from === 'post') {
      return (
        <img
          className="w-full object-cover"
          src={`https://picsum.photos/seed/post${imageId}/600/4000`}
          alt="post"
        />
      );
    } else {
      return (
        <img
          className="w-full object-cover"
          src={`http://localhost:4000/api/v1/get_custom_post/${imageIdS}`}
          alt="custom post"
        />
      );
    }
  }

  function render_manga_name() {
    if (from === 'manga') {
      return <h2 className="text-lg font-semibold text-white">{manganame}</h2>;
    }
    return null;
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-md overflow-hidden my-4 border border-gray-900 text-white">
      <div className="flex items-center px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={
            imageId
              ? `https://picsum.photos/seed/user${imageId}/100/100`
              : `https://picsum.photos/seed/userdefault/100/100`
          }
          alt="user"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold text-white">{username}</p>
        </div>
      </div>

      <div className="w-full h-[400px] overflow-y-scroll" onClick={handleImageClick}>
        {render_content()}
      </div>

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
          {description || "Lee este episodio deslizando hacia abajo."}
          {render_manga_name()}
        </p>
      </div>
    </div>
  );
}

export default Post;
