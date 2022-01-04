import React, { useRef } from 'react';
import { useIntersectionObserver } from '../intersectionObserver';
import quotationMark from './quotation-mark.svg';
import './styles.scss';

type Props = {
  text: string;
  author: string;
};

export const Testimonial: React.FC<Props> = ({ text, author }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  return (
    <section className={`testimonial ${isVisible ? 'inView' : ''}`} ref={ref}>
      <div className='container'>
        <img className='quotation-mark' src={quotationMark} alt='' />
        <p className='testimonial__text'>{text}</p>
        <p className='testimonial__author'>{author}</p>
      </div>
    </section>
  );
};
