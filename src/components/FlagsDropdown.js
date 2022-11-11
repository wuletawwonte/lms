import React, { useState } from 'react';
import images from '../services/importFlags';
import allCountries from '../services/countries';
import './FlagsDropdown.scss';

export default function FlagsDropdown() {
  const [isActive, setIsActive] = useState(false);
  const [country, setCountry] = useState('India.gif');

  function handleClick() {
    setIsActive(!isActive);
  }

  function changeCountry(countryName) {
    setCountry(countryName);
    setIsActive(false);
  }

  return (
    <div className="flags">
      <button type="button" className="flags__button" onClick={handleClick}>
        <img
          src={images[country]}
          alt="Flags of Afghanistan"
          className="flags__button__image"
        />
      </button>
      {isActive && (
        <div className="flags__list">
          {allCountries.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => changeCountry(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
