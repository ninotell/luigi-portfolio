import React, { useState, useEffect } from 'react'
import "./styles.css"
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll/modules';

const navVariants = {
    opened: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: "-100%",
        opacity: 0
    },
};

const navBarItems = [
    "Mis trabajos",
    "Contacto",
]

const navBarItemsVariants = {
    opened: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: "-100vh",
        opacity: 0
    }
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [lastYPos, setLastYPos] = React.useState(0);
    const [shouldShowToggle, setShouldShowToggle] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            setShouldShowToggle(isScrollingUp);
            setLastYPos(yPos);
            if (isOpen && !isScrollingUp){
                setIsOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos, isOpen]);


    const handleNavbarToggle = (e) => {
        e.preventDefault()
        setIsOpen(prev => !prev)
    }

    return (
        <div className='Navbar'>
            <motion.div
                className='toggle-wrapper'
                animate={{
                    opacity: shouldShowToggle ? 1 : 0
                }}
            >
                <a href='/' onClick={(e) => handleNavbarToggle(e)} className={isOpen ? "n-toggle open" : "n-toggle"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </motion.div>
            <motion.nav
                variants={navVariants}
                animate={isOpen ? "opened" : "closed"}
                transition={{
                    duration: .3,
                    type: 'just',
                    staggerChildren: .05
                }}
            >
                <ul className='n-list'>
                    {navBarItems.map((ni, index) => (
                        <motion.li
                            key={ni}
                            className='n-item'
                            variants={navBarItemsVariants}
                            transition={{
                                type: 'just'
                            }}
                        >
                            <Link
                                to={`section${index}`}
                                offset={50}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                            >{ni}</Link>

                        </motion.li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navbar