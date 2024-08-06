// src/components/Category.tsx
import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  name: string;
  images: string[];
}

const Category: React.FC<CategoryProps> = ({ name, images }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <button className="bg-[#AA9BA0] text-white px-4 py-2 rounded-full">Show More</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image 
              src={src} 
              alt={`${name} image ${index + 1}`} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
