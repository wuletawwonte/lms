import React, { useState } from 'react';
import { BsCaretDownFill, BsCaretLeftFill } from 'react-icons/bs';
import images from '../services/importFlags';
import allCountries from '../services/countries';
import './FlagsDropdown.scss';

export default function FlagsDropdown() {
  const [isActive, setIsActive] = useState(false);
  const [country, setCountry] = useState('India');

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
          src={images[`${country}.gif`]}
          alt="Flags of Afghanistan"
          className="flags__button__image"
        />
        {isActive ? <BsCaretLeftFill /> : <BsCaretDownFill />}
      </button>
      {isActive && (
        <div className="flags__list">
          {allCountries.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => changeCountry(item)}
            >
              <img src={images[`${item}.gif`]} alt={item} />
              <span>{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
