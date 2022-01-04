import React, { useRef } from 'react';
import { useIntersectionObserver } from '../intersectionObserver';
import './styles.scss';

interface Props {
  text: string;
  img: string;
}

export const Hero: React.FC<Props> = ({ text, img }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  return (
    <section className={`hero container ${isVisible ? 'inView' : ''}`} ref={ref}>
      <div className='row'>
        <div className='col'>
          <p className='hero__text'>{text}</p>
        </div>
        <div className='col'>
          <img src={img} alt='Streetwear women with camera sitting on stairs' />
        </div>
      </div>
    </section>
  );
};
