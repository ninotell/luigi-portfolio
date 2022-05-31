import React from 'react'
import WorkItem from '../WorkItem'
import "./styles.css"
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'

const worksItemsArray = [
    {
        title: "weddings",
        background: process.env.PUBLIC_URL + "/assets/weddings/thumbnail/weddings (1).jpg"
    },
    {
        title: "discos",
        background: process.env.PUBLIC_URL + "/assets/discos/thumbnail/discos (1).jpg"
    },
    {
        title: "portraits",
        background: process.env.PUBLIC_URL + "/assets/portraits/thumbnail/portraits (1).jpg"
    },
    {
        title: "advertising",
        background: process.env.PUBLIC_URL + "/assets/advertising/thumbnail/advertising (1).jpg"
    },
]


const workitemVariants = {

    initial: {
        scale: .8,
        opacity: 0
    },
    final: {
        scale: 1,
        opacity: 1
    }

}

const Works = ({ id, setShowModal, setWorkCategory }) => {


    const handleWorkItemClick = (e, title) => {
        e.preventDefault()
        setWorkCategory(title)
        setShowModal(true)
    }

    return (
        <div id={id} className='Works'>

            <SectionTitle content={"Mis trabajos"} />
            <div className='worksItems-container'>
                {worksItemsArray.map((i, index) => (
                    <motion.a
                        key={i.title}
                        onClick={(e) => handleWorkItemClick(e, i.title)}
                        initial="initial"
                        whileInView="final"
                        viewport={{once: true}}
                        variants={workitemVariants}
                        transition={{ duration: .5 }}
                        whileTap={{
                            scale: 0.95,
                            transition: { duration: .1 },
                        }}                     
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