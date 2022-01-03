import React from 'react';
import './styles.scss';

interface Props {
  text: string;
  img: string;
}

export const Hero: React.FC<Props> = ({ text, img }) => {
  return (
    <section className='hero container'>
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
