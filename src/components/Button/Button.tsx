import React from 'react';
import './styles.scss';

type Props = {
  text: string;
  type: 'button' | 'submit';
};

export const Button: React.FC<Props> = ({ text, type }) => {
  return <button type={type}>{text}</button>;
};
