import React from 'react';
import SectionsLoop from '../../components/SectionsLoop';
import { HeroData } from '../../models/HeroData';
import { TestimonialData } from '../../models/TestimonialData';

const SectionsData: (HeroData | TestimonialData)[] = [
  {
    type: 'hero',
    text: 'Excepteur sint occaecat cupidatat non proident sunt.',
    img: 'https://i.ibb.co/G9bfTPH/breally-img.png',
  },
  {
    type: 'testimonial',
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    author: 'Peam Pim, The Actor',
  },
  // {
  //   type: 'newsletter',
  // },
];

export const Home: React.FC = () => {
  return <SectionsLoop sections={SectionsData} />;
};
