import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/boston">Boston Celtics</Link>
          </li>
          <li>
            <Link to="/lakers">Los Angeles Lakers</Link>
          </li>
          <li>
            <Link to="/clippers">Los Angeles Clippers</Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navigation;