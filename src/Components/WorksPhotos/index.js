import React from 'react'
import "./styles.css"

import { motion } from 'framer-motion'
import WorkItem from '../WorkItem'

const worksItemsArray = [
    {
        title: "gastronomy",
        background: process.env.PUBLIC_URL + "/assets/gastronomy/thumbnail/gastronomy (1).jpg",
        imgQty: 26
    },
    {
        title: "weddings",
        background: process.env.PUBLIC_URL + "/assets/weddings/thumbnail/weddings (1).jpg",
        imgQty: 17
    },
    {
        title: "discos",
        background: process.env.PUBLIC_URL + "/assets/discos/thumbnail/discos (2).jpg",
        imgQty: 24
    },
    {
        title: "advertising",
        background: process.env.PUBLIC_URL + "/assets/advertising/thumbnail/advertising (1).jpg",
        imgQty: 19
    },
    {
        title: "portraits",
        background: process.env.PUBLIC_URL + "/assets/portraits/thumbnail/portraits (1).jpg",
        imgQty: 13
    },
]




const WorksPhotos = ({ handleWorkItemClick, workitemVariants }) => {
    return (
        <div className='worksItems-container'>
            {worksItemsArray.map((i, index) => (
                <motion.a
                    key={i.title}
                    onClick={(e, index) => handleWorkItemClick(e, i)}
                    initial="initial"
                    whileInView="final"
                    viewport={{ once: true }}
                    variants={workitemVariants}
                    transition={{
                        duration: .5,
                        delay: .05 * index
                    }}
                    whileTap={{
                        scale: 0.95,
                        transition: {
                            duration: .1
                        },
                    }}
                >
                    <WorkItem
                        title={i.title}
                        background={i.background} />
                </motion.a>
            ))}
        </div>
    )
}

export default WorksPhotos