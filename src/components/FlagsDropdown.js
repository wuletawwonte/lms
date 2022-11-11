import React from 'react';
import images from '../services/importFlags';
import './FlagsDropdown.scss';

export default function FlagsDropdown() {
  return (
    <div className="flags">
      <button type="button" className="flags__button">
        <img
          src={images['Flag of Afghanistan.gif']}
          alt="Flags of Afghanistan"
          className="flags__button__image"
        />
      </button>
    </div>
  );
}
