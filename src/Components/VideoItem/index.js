import React from 'react'
import { motion } from 'framer-motion'
import "./styles.css"

const videoDescriptionVariants = {
    initial: {
        y: -25,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

const VideoItem = ({ poster, urlWebm, location, category }) => {
    return (
        <motion.div className='videoContainer'
            initial={{
                opacity: 0,
                scale: .9
            }}
            whileInView={{
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}

            viewport={{ once: true }}
        >
            <video
                controls
                preload="metadata"
                poster={poster}

            >
                <source src={`${urlWebm}`} type="video/webm" />
                {/* <source src={urlMp4} type="video/mp4" /> */}
            </video>
            <motion.div className='video-description'
                variants={videoDescriptionVariants}
                initial="initial"
                whileInView="animate"
                transition={{
                    staggerChildren: .2
                }}
                viewport={{ once: true }}
            >
                <motion.p
                    className='video-location'
                    variants={videoDescriptionVariants}
                >
                    {location}
                </motion.p>
                <motion.p
                    className='video-category'
                    variants={videoDescriptionVariants}
                >
                    {category}
                </motion.p>

            </motion.div>
        </motion.div>
    )
}

export default VideoItem