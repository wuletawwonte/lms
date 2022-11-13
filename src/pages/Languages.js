import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Languages.scss';

export default function Languages() {
  return (
    <div className="languages">
      <form>
        <input type="search" placeholder="Search Language" className="search" />
        <button type="submit" className="submit">
          <FaSearch />
        </button>
      </form>

      <div className="languages__filters">
        <button type="button">
          <h3>Global</h3>
          <span>Top 20 spoken Languages</span>
        </button>
        <div className="button-row">
          <button type="button">
            <h3>Africa Continent</h3>
            <span>Top 20 spoken Languages</span>
          </button>
          <button type="button">
            <h3>Sub-continental</h3>
            <span>Top 20 spoken Languages</span>
          </button>
        </div>
        <div className="button-row">
          <button type="button">
            <h3>Country</h3>
            <span>Top 20 spoken Languages</span>
          </button>
          <button type="button">
            <h3>Provinse/state</h3>
            <span>Top 20 spoken Languages</span>
          </button>
        </div>
        <button type="button">
          <h3>Global</h3>
          <span>Top 20 spoken Languages</span>
        </button>
      </div>
    </div>
  );
}
