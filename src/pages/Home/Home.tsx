import React, { useEffect, useState } from 'react';
import SectionsLoop from '../../components/SectionsLoop';
import { HeroData } from '../../models/HeroData';
import { NewsletterData } from '../../models/NewsletterData';
import { TestimonialData } from '../../models/TestimonialData';
import { getPage } from '../../services/breallyApi';
import './styles.scss';

export const Home: React.FC = () => {
  const [sections, setSections] = useState<(HeroData | TestimonialData | NewsletterData)[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    getPage('MPz3uDxgKR').then((res) => {
      setSections(res.data.sections);
      setIsloading(false);
    });
  }, []);

  return (
    <>
      <div className={`loading ${isLoading ? '' : 'loaded'}`}></div>
      <SectionsLoop sections={sections} />
    </>
  );
};
