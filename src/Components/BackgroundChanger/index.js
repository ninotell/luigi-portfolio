import React from 'react'
import "./styles.css"
import { motion } from 'framer-motion'

const images = [
    {
        url: `${process.env.PUBLIC_URL}/assets/homeGallery/6.jpg`
    },
    {
        url: `${process.env.PUBLIC_URL}/assets/homeGallery/2.jpg`
    },
    {
        url: `${process.env.PUBLIC_URL}/assets/homeGallery/3.jpg`
    },
    {
        url: `${process.env.PUBLIC_URL}/assets/homeGallery/4.jpg`
    },
    {
        url: `${process.env.PUBLIC_URL}/assets/homeGallery/5.jpg`
    }
]

function BackgroundChanger() {
    return (
        <div
            className='homeGallery'

        >
            {images.map((i, index) => (
                <motion.img
                    key={index}
                    className={`galleryImg-${index}`}
                    alt="background"
                    src={i.url}
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 5 + (5 * index),
                        duration: 1.3
                    }}
                    style={{
                        zIndex: -index
                    }}
                />
            ))}

            <img
                src={`${process.env.PUBLIC_URL}/assets/homeGallery/1.jpg`}
                className="galleryImg-6"
                alt="background"
                style={{
                    zIndex: -5
                }}
            />
        </div>
    )
}

export default BackgroundChanger