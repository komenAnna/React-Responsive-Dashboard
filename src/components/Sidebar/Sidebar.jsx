import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt, UilBars, UilTimes} from "@iconscout/react-unicons"

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <>
    {/* menu bar */}
    <div className="menuBar" >
        <UilBars onClick={toggleMenu}/>
        <UilTimes className='close' />
    </div>
    <div className={`Sidebar ${toggleMenu}`}>
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="shop-logo" />
            <span>
                Sh<span>o</span>p
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return (
                    <div className={selected===index?"menuItem active":"menuItem"} 
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                )
            })}

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar