import React from 'react';
import quotationMark from './quotation-mark.svg';
import './styles.scss';

type Props = {
  text: string;
  author: string;
};

export const Testimonial: React.FC<Props> = ({ text, author }) => {
  return (
    <section className='testimonial'>
      <div className='container'>
        <img className='quotation-mark' src={quotationMark} />
        <p className='testimonial__text'>{text}</p>
        <p className='testimonial__author'>{author}</p>
      </div>
    </section>
  );
};
