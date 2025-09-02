
import React from 'react';
import type { NavLink, Service, GalleryImage } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#/home', label: 'Home' },
  { href: '#/services', label: 'Services' },
  { href: '#/gallery', label: 'Gallery' },
  { href: '#/contact', label: 'Contact' },
];

const iconClass = "h-12 w-12 text-amber-400";

export const SERVICES: Service[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.005 18c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3z" /></svg>,
    title: 'Product Development',
    description: 'From concept to sample, we guide you through the entire product development lifecycle, ensuring your vision is realized.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Quality Assurance',
    description: 'Our on-the-ground teams conduct rigorous quality checks at every stage of production to guarantee superior garment quality.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 18h6" /></svg>,
    title: 'Logistics & Shipping',
    description: 'We manage all logistics, from factory to your doorstep, ensuring timely and cost-effective delivery of your products.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    title: 'Factory Sourcing',
    description: 'Leveraging our extensive network, we connect you with the most reliable and ethical manufacturers that fit your needs.',
  },
];


export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&h=600&fit=crop', alt: 'Denim Jacket on hanger', category: 'Jackets' },
    { id: 2, src: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&h=600&fit=crop', alt: 'Folded Blue Jeans', category: 'Denim' },
    { id: 3, src: 'https://images.unsplash.com/photo-1534961982320-9e694223b2b8?q=80&w=800&h=600&fit=crop', alt: 'Person wearing a Gray Hoodie', category: 'Hoodies' },
    { id: 4, src: 'https://images.unsplash.com/photo-1602293589914-9e296ba2a7c4?q=80&w=800&h=600&fit=crop', alt: 'Various Denim Pants', category: 'Denim' },
    { id: 5, src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&h=600&fit=crop', alt: 'Leather Biker Jacket', category: 'Jackets' },
    { id: 6, src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&h=600&fit=crop', alt: 'Close up on Black Jeans', category: 'Denim' },
    { id: 7, src: 'https://images.unsplash.com/photo-1556156649-55df88c5ba77?q=80&w=800&h=600&fit=crop', alt: 'Stylish man in hoodie', category: 'Hoodies' },
    { id: 8, src: 'https://images.unsplash.com/photo-1605518429452-ed2379a0de5a?q=80&w=800&h=600&fit=crop', alt: 'Jean jacket detail', category: 'Jackets' },
    { id: 9, src: 'https://images.unsplash.com/photo-1563352723-93052328896a?q=80&w=800&h=600&fit=crop', alt: 'Ripped denim jeans', category: 'Denim' },
    { id: 10, src: 'https://images.unsplash.com/photo-1576871335624-783ef7c65239?q=80&w=800&h=600&fit=crop', alt: 'Black hoodie', category: 'Hoodies' },
    { id: 11, src: 'https://images.unsplash.com/photo-1598937984253-1e5302521769?q=80&w=800&h=600&fit=crop', alt: 'Stack of jeans', category: 'Denim' },
    { id: 12, src: 'https://images.unsplash.com/photo-1610452623126-70f90e388d1e?q=80&w=800&h=600&fit=crop', alt: 'Warm jackets', category: 'Jackets' },
];
