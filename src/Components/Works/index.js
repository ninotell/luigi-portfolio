import React, { useState } from 'react'
import "./styles.css"
import { motion } from 'framer-motion'
// import SectionTitle from '../SectionTitle'
import WorksPhotos from '../WorksPhotos'
import WorksVideos from '../WorksVideos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'


const worksListItems = [
    {
        id: 0,
        title: "fotos"
    },
    {
        id: 1,
        title: "videos"
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
    const [viewSelected, setViewSelected] = useState(0)


    const handleWorkItemClick = (e, workItem) => {
        e.preventDefault()
        setWorkCategory(workItem)
        setShowModal(true)
    }

    return (
        <div id={id} className='Works'>

            {/* <SectionTitle content={"Mis trabajos"} /> */}
            <div
                className='worksTabs-container'
            >
                <nav>
                    <ul>
                        {worksListItems.map(({ id, title }) => (
                            <motion.li
                                key={id}
                                onClick={() => setViewSelected(id)}
                                whileTap={{
                                    scale: .98
                                }}
                            >
                                {title}

                                {id === viewSelected &&
                                    <motion.div
                                        transition={{ duration: .3 }}
                                        className='underline'
                                        layoutId='underline'
                                    >

                                    </motion.div>}
                            </motion.li>

                        ))}

                    </ul>
                </nav>
            </div>
            {viewSelected === 0 ?
                <WorksPhotos
                    handleWorkItemClick={handleWorkItemClick}
                    workitemVariants={workitemVariants}
                />
                : <WorksVideos />}
            <div className='works-bottom'>
                <span>
                    Si estás interesado en ver más de mi <strong>material</strong> no dudes en contactarme.
                </span>
                <span>
                    ¡Aquí abajo están mis datos!
                </span>
                <motion.div
                    animate={{
                        y: [0, 5, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                    }}
                ><Link
                    to={`section1`}
                    offset={50}
                    smooth={true}
                    duration={500}
                >    <FontAwesomeIcon className='icon' icon={faArrowDown} />
                </Link>

                </motion.div>

            </div>


        </div>
    )
}

export default Works