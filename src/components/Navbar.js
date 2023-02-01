import React, { useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [navList, setNavList] = useState([
        {
            name: "Home",
            to: 'Home'
        },
        {
            name: "About",
            to: 'About'
        },
        {
            name: "Guarantee",
            to: 'Guarantee'
        },
        {
            name: "Service",
            to: 'Service'
        },
        {
            name: "FAQ",
            to: 'FAQ'
        },
        {
            name: "Contact",
            to: 'Contact'
        }
    ])

    const [navActive, setNavActive] = useState('Home')
    return (
        <nav className='navbar'>
            <div className='LogoNav'>
                
            </div>
            <div className='mobileBarsIconWrapper'>
               <button className='buttonBars'>
                    <FontAwesomeIcon className='barsIcon' icon={faBars}/> 
               </button>
            </div>
            <div className='navListWrapper'>
                {
                    navList.map((item) => {
                        return (
                            navActive === item.name ? 
                            <Link className='navListNameActive'
                                onSetActive={() => setNavActive(item.to)}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}>{item.name}{console.log(navActive)}
                            </Link>
                            :
                            <Link className='navListNameInActive'
                                onSetActive={() => setNavActive(item.to)}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}>
                                    <button>{item.name}</button>
                                    {console.log(navActive)}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}
