import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
            <div className="logo">
                <h2>trxvl.</h2>
            </div>
            <div>
                <ul className="main__nav">
                    <li className='nav__item'><a href="#"> Home</a></li>
                    <li className='nav__item'><a href="#"> Stays</a></li>
                    <li className='nav__item'><a href="#"> Flights</a></li>
                    <li className='nav__item'><a href="#"> Packages</a></li>
                    <li className='nav__item'><a href="#"> Sign Up</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar