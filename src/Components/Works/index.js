import React from 'react'
import WorkItem from '../WorkItem'
import "./styles.css"
import { motion } from 'framer-motion'

const worksItemsArray = [
    {
        title: "weddings",
        background: "/assets/weddings/thumbnail/weddings (1).jpg"
    },
    {
        title: "discos",
        background: "/assets/discos/thumbnail/discos (1).jpg"
    },
    {
        title: "portraits",
        background: "/assets/portraits/thumbnail/portraits (1).jpg"
    },
    {
        title: "advertising",
        background: "/assets/advertising/thumbnail/advertising (1).jpg"
    },
]


const workitemVariants = {

    initial: {
        x: "100vw"
    },
    final: {
        x: 0
    }

}
const workitemVariants2 = {

    initial: {
        x: "-100vw"
    },
    final: {
        x: 0
    }

}

const Works = ({ setShowModal, setWorkCategory }) => {


    const handleWorkItemClick = (e, title) => {
        e.preventDefault()
        setWorkCategory(title)
        setShowModal(true)
    }

    return (
        <div className='Works'>
            <div className='worksItems-container'>
                {worksItemsArray.map((i, index) => (
                    <motion.a
                        key={i.title}
                        onClick={(e) => handleWorkItemClick(e, i.title)}
                        initial="initial"
                        visible="final"
                        variants={index % 2 === 0 ? workitemVariants : workitemVariants2 }
                        animate="final"
                    >
                        <WorkItem
                            title={i.title}
                            background={i.background} />
                    </motion.a>
                ))}
            </div>
        </div>
    )
}

export default Works