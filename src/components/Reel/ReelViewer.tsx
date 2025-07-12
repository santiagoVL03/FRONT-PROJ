import React, { useState, useEffect } from 'react';

function ReelViewer() {
  const videos = [
    "dQw4w9WgXcQ", // Rickroll 😎
    "3fumBcKC6RE", // Ejemplo 2
    "e-ORhEE9VVg", // Ejemplo 3
  ];

  const [videoId, setVideoId] = useState<string>("");

  useEffect(() => {
    // Selecciona un video aleatorio al cargar el componente
    const randomId = videos[Math.floor(Math.random() * videos.length)];
    setVideoId(randomId);
  }, []);

  const reelTitle = "¡Reel aleatorio de YouTube!";
  const username = "youtubeFan";
  const avatarUrl = "https://i.pravatar.cc/40?u=user123";

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full max-w-sm">
        <div className="aspect-w-9 aspect-h-16">
          <iframe
            className="w-full h-64"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4 text-white">
          <div className="flex items-center mb-2">
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-300">@{username}</span>
          </div>
          <h2 className="text-lg font-bold">{reelTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default ReelViewer;
