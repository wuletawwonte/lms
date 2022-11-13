import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Languages.scss';

export default function Languages() {
  return (
    <div className="languages">
      <form>
        <input type="search" placeholder="Search Language" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
