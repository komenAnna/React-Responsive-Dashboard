import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="shop-logo" />
            <span>
                Sh<span>o</span>p
            </span>
        </div>
    </div>
  )
}

export default Sidebar