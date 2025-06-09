import { Heart, MessageCircle, Send } from 'lucide-react';

function Post() {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-md overflow-hidden my-4 border border-gray-200 text-white">
      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://picsum.photos/100/100"
          alt="user"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold text-white">@another_person</p>
        </div>
      </div>

      {/* Imagen */}
      <img className="w-full object-cover" src="https://picsum.photos/600/400" alt="post" />

      {/* Botones */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-4">
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-500" />
          <Send className="w-6 h-6 cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Descripción */}
      <div className="px-4 pb-4">
        <p className="text-sm">
          <span className="font-semibold mr-1">another_person</span>
          Another Fanrt
        </p>
      </div>
    </div>
  );
}

export default Post;
