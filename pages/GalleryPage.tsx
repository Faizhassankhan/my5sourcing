
import React, { useState, useMemo } from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-gray-400">{subtitle}</p>
      <div className="mt-6 w-24 h-1 bg-amber-400 mx-auto"></div>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(GALLERY_IMAGES.map(image => image.category)))], []);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter(image => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-20">
      <PageHeader title="Product Gallery" subtitle="A glimpse into the quality garments we source." />
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-semibold rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image: GalleryImage) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg h-80">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-lg font-bold">{image.category}</h3>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
