import React from 'react'
import { useRef } from "react"
import "./styles.css"
import { motion } from 'framer-motion'

const Name = () => {
    const containerRef = useRef(null)

    return (

        <motion.div
            ref={containerRef}
            className='NameContainer'
            initial={{
                scale: 1,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}
            drag={true}
            dragConstraints={containerRef}
            whileTap={{
                scale: .95,
            }}
            transition={{
                duration: .9,
                scale:{
                    duration: .2
                },
                delayChildren: 1
            }}
        >
            <motion.h2
                initial={{
                    filter: "blur(10px)"
                }}
                animate={{
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 1.5,
                    ease: [1.000, 1.475, 0.170, -0.565]
                }}
            >Luigi Tell
                <motion.span
                    initial={{
                        filter: "blur(10px)"
                    }}
                    animate={{
                        filter: "blur(0px)"
                    }}
                    transition={{
                        duration: 1,
                        type: 'tween'
                    }}
                >Fotógrafo</motion.span>
            </motion.h2>
            <span className='border-1'></span>
            <span className='border-2'></span>
        </motion.div>
    )
}

export default Name