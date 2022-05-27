import React, { useState } from 'react'
import "./styles.css"
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleNavbarToggle = () => {
        setIsOpen(prev => !prev)
    }
    const navVariants = {
        opened: {
            y: 0,
        },
        closed: {
            y: "-100%",
        },
    };

    return (
        <div className='Navbar'>
            <div className='toggle-wrapper'>
                <a onClick={handleNavbarToggle} className={isOpen ? "n-toggle open" : "n-toggle"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <motion.nav
                inital={false}
                variants={navVariants}
                animate={isOpen ? "opened" : "closed"}
                transition={{
                    duration: .3,
                    type: 'tween'
                }}>
                <ul className='n-list'>
                    <li className='n-item'>LOGO</li>
                    <li className='n-item'>Sobre mi</li>
                    <li className='n-item'>Mis trabajos</li>
                    <li className='n-item'>Contacto</li>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navbar