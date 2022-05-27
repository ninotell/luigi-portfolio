import React from 'react'
import "./styles.css"
import { motion, AnimatePresence } from 'framer-motion'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const modalbackground = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
}

const imagescontainer = {
    visible: {
        y: 0
    },
    hidden: {
        y: "-100vh"
    },
    exit: {
        y: "100vh"
    }
}

const WorkItemModal = ({ showModal, setShowModal, workCategory }) => {

    let viewportHeight = window.innerHeight;
    const images = [

    ]

    for (let i = 1; i < 12; i++) {
        images.push({
            url: `/assets/${workCategory}/thumbnail/${workCategory} (${i}).jpg`
        })
    }
    
    const handleCloseModal = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

    return (
        <AnimatePresence
            exitBeforeEnter>
            {showModal && (
                <motion.div
                    className='WorkItemModal'
                    initial="hidden"
                    animate="visible"
                    variants={modalbackground}
                    exit="hidden"
                >
                    <div className='closeModal-button'>
                        <button onClick={(e) => handleCloseModal(e)}>X</button>
                    </div>
                    <motion.div className='imagesContainer'
                        variants={imagescontainer}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Carousel
                            className='carousel'
                            showThumbs={false}
                            // dynamicHeight={true}
                            infiniteLoop={true}
                            centerMode={true}
                            centerSlidePercentage={100}
                            dynamicHeight={true}
                        >
                            {images.map(i => <div><img style={{ maxHeight: (viewportHeight * 0.95) }} alt='prueba' src={i.url} /></div>)}
                        </Carousel>

                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default WorkItemModal