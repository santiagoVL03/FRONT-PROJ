import React from 'react';

function Comic() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-800 shadow-lg rounded-2xl">
      <img
        src="https://picsum.photos/seed/post/600/400"
        alt="Comic Cover"
        className="w-full rounded-xl mb-4 shadow-md object-cover h-96 max-h-96"
      />
      <h1 className="text-3xl font-bold mb-2 text-white">Título del Cómic</h1>
      <p className="text-gray-200 mb-4">Autor: Juan Pérez</p>
      <p className="text-gray-100">
        Esta es una historia emocionante que combina aventura, acción y drama.
        Descubre un mundo donde los héroes luchan por la justicia en un universo lleno de misterios.
      </p>
    </div>
  );
}

export default Comic;
