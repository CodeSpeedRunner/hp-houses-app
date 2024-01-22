import React from 'react';
import styles from './HouseListItem.module.css';
import { isValidColor } from '../../utilities/isValidColor';

const HouseListItem = ({ house: { name, animal, founder, houseColours } }) => {
  const houseColors = houseColours.split(' and ');
  const [ firstColor, secondColor ] = houseColors;
  const isValidGradient = houseColors.every(isValidColor);
  const gradientStyle = {
    background: isValidGradient
      ? `linear-gradient(to right, ${firstColor}, ${secondColor})`
      : 'linear-gradient(to right, white, black)'
  };
  const { container, header, names, gradient, footer, founders } = styles;

  return (
    <div className={container}>
      <div className={header}>
        <span className={names}>{name}</span>
        <span>{animal}</span>
      </div>
      <div className={gradient} style={gradientStyle}></div>
      <div className={footer}>
        <span>
          Founder: <span className={founders}>{founder}</span>
        </span>
      </div>
    </div>
  );
};

export { HouseListItem };
