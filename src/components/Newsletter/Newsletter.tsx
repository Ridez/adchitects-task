import React, { useRef, useState } from 'react';
import { singUpToNewsletter } from '../../services/breallyApi';
import Button from '../Button';
import { useIntersectionObserver } from '../intersectionObserver';
import './styles.scss';

export const Newsletter: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formEmail, setFormEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage('');
    setHasError(false);
    setIsSubmitting(true);

    singUpToNewsletter(formEmail).then((res) => {
      setMessage(res?.data.message);
      setIsSubmitting(false);

      if (res.status !== 200) {
        setHasError(true);
      }
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormEmail(event.target.value);
  };

  return (
    <section className={`newsletter container ${isVisible ? 'inView' : ''}`} ref={ref}>
      <h2 className='newsletter__title'>Sign up for Newsletter</h2>
      <form onSubmit={handleSubmit} className='newsletter__form'>
        <input
          onChange={handleChange}
          className='newsletter__input'
          name='email'
          placeholder='Type your email'
        />
        <Button type='submit' text='Submit'></Button>
      </form>
      {isSubmitting && <div className='newsletter__submitting'>Signing up to newsletter...</div>}
      {message && (
        <div className={`newsletter__response ${hasError ? 'newsletter__error' : ''}`}>
          {message}
        </div>
      )}
    </section>
  );
};
