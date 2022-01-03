import React from 'react';
import { HeroData } from '../../models/HeroData';
import { NewsletterData } from '../../models/NewsletterData';
import { TestimonialData } from '../../models/TestimonialData';
import Hero from '../Hero';
import Newsletter from '../Newsletter';
import Testimonial from '../Testimonial';

interface Props {
  sections: (HeroData | TestimonialData | NewsletterData)[];
}

const getSectionComponent = (section: any, sectionIdx: number) => {
  switch (section.type) {
    case 'hero':
      return <Hero key={sectionIdx} {...section} />;

    case 'testimonial':
      return <Testimonial key={sectionIdx} {...section} />;

    case 'newsletter':
      return <Newsletter key={sectionIdx} />;

    default:
      return <div key={sectionIdx} className='no_section_type' />;
  }
};

export const SectionsLoop: React.FC<Props> = ({ sections }) => {
  return (
    <div className='sections-wrapper'>
      {sections.map((section, sectionIdx) => getSectionComponent(section, sectionIdx))}
    </div>
  );
};
