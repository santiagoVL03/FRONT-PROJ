import React from 'react';
import Comic from '../../pages/Comic';

function ComicPage() {
  const previewPages = [
    'https://via.placeholder.com/600x800?text=Page+1',
    'https://via.placeholder.com/600x800?text=Page+2',
    'https://via.placeholder.com/600x800?text=Page+3',
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <Comic />

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vista previa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {previewPages.map((page, index) => (
            <img
              key={index}
              src={page}
              alt={`Preview Page ${index + 1}`}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComicPage;
