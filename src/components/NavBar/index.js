import { useState } from 'react';
import './navBar.scss';
import { GiHouse } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { IoBagSharp } from 'react-icons/io5';
import { TbMessages } from 'react-icons/tb';

export const NavBar = () => {

    // to change burger classes  
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    console.log(burger_class)
    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
            <nav>
                <div className="burger-menu"  onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
               
                <div className={menu_class}>
                    <div className="logo">
                      <p><span>L</span>ogo</p>
                    </div>
                    <ul>
                        <li className='links'>
                            <a href="#"className='link-active'>
                                <GiHouse style={{marginRight:'15px'}}/>
                                Home
                            </a>
                        </li>
                        <li className='links'>
                            <a href="#">
                                <FaUser style={{marginRight:'15px'}}/>
                                About
                            </a>
                        </li>
                        <li className='links'>
                            <a href="#">
                                <CgMenuGridO style={{marginRight:'15px'}}/>
                                Services
                            </a>
                        </li>
                        <li className='links'>
                            <a href="#">
                                <IoBagSharp style={{marginRight:'15px'}}/>
                                Portfolio
                            </a>
                        </li>
                        <li className='links'>
                            <a href="#">
                                <TbMessages style={{marginRight:'15px'}}/>
                                Contact
                            </a>
                        </li>
                    </ul>
                 
                </div>
            </nav>
    )
}