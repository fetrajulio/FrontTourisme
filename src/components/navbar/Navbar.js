import React from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav class="e-navbar">
        <section class="d-flex justify-content-between align-items-center py-3">

            <div class="e-logo">
                <a>
                    <div><NavLink to="/" className="e-logo-name">Tourism</NavLink></div>
                </a>
            </div>

            <ul class="e-right-items-icons">
              <li class="e-right-icons e-ml"><NavLink to="/" className="icon-style">Home</NavLink></li>
              <li class="e-right-icons e-ml"><NavLink to="/forum" className="icon-style">Forum</NavLink></li>
              <li class="e-right-icons e-ml dropdown">
                  Plus
                <ul class="dropdown__menu mt-3" id="sweets-dropdown">
                    <li><NavLink to="/account">Accounts</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                 </ul>
              </li>
            </ul>

        </section>
    </nav>
)

export default Navbar;
