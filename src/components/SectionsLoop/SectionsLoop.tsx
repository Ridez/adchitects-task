import React from 'react';
import { HeroData } from '../../models/HeroData';
import Hero from '../Hero';

interface Props {
  sections: HeroData[];
}

const getSectionComponent = (section: HeroData, sectionIdx: number) => {
  switch (section.type) {
    case 'hero':
      return <Hero key={sectionIdx} {...section} />;

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
