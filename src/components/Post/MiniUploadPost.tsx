import React from 'react';

function MiniUploadPost() {
  const handleClick = () => {
    // Al dar click, redirigir a la página de creación de publicaciones
    window.location.href = '/uploadcomic';
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg max-w-md mx-auto cursor-pointer transition shadow"
    >
      <div className="flex items-center space-x-3">
        {/* Imagen del usuario simulada */}
        <img
          src="https://i.pravatar.cc/40?u=user"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />

        {/* Input visual (read-only) */}
        <input
          type="text"
          readOnly
          placeholder="Publica algo sobre tu cómic..."
          className="w-full bg-gray-700 text-gray-400 placeholder-gray-400 px-4 py-2 rounded-full outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}

export default MiniUploadPost;
