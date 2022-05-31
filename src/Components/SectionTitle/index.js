import React from 'react'
import "./styles.css"
import { motion } from 'framer-motion'

const SectionTitle = ({ content }) => {
    return (
        <motion.h2
            className='sectionTitle'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: .75,
                delay: .1

            }}
            viewport={{ once: true }}
        >
            {content}</motion.h2>
    )
}

export default SectionTitle