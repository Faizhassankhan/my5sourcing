
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-gray-400">{subtitle}</p>
      <div className="mt-6 w-24 h-1 bg-amber-400 mx-auto"></div>
    </div>
  </div>
);

const serviceImages = [
    'https://i.postimg.cc/pLvH2H61/De-Watermark-ai-1756907555285.jpg',
    'https://i.postimg.cc/yNVsTHhS/De-Watermark-ai-1756908214913.jpg',
   'https://i.postimg.cc/8CtDK0wX/De-Watermark-ai-1756908242387.jpg',
   'https://i.postimg.cc/FRzv2VBr/istockphoto-173239968-1024x1024-1-jpg.jpg',
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20"> {/* Padding top for fixed header */}
      <PageHeader title="Our Expertise" subtitle="End-to-end solutions for your fashion brand." />
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 space-y-20">
          {SERVICES.map((service: Service, index: number) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <img src={serviceImages[index]} alt={service.title} className="rounded-lg shadow-2xl object-cover w-full h-80 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                 <p className="text-gray-400 mt-4 leading-relaxed">
                   We meticulously handle every detail, from initial design sketches to final production, ensuring the highest standards are met. Our global network allows us to source the best materials and factories for your unique needs, delivering exceptional quality and value.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
