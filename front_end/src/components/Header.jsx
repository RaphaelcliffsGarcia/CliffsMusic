import React from 'react'
import logoCliffs from '../assets/logo/cliffs-logo.png';

const Header = () => {
  return (
    <div className='header'>
        <img src={logoCliffs} alt="Logo do cliffsFy" />
        <a className='header__link' href="">
            <h1>CLIFFSFY</h1>
        </a>
    </div>
  )
}

export default Header