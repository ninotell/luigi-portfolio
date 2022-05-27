import React from 'react'
import "./styles.css"

const WorkItem = ({ title, background }) => {
    return (
        <div
            className='workItem-container'
            style={{
                backgroundImage: `url("${background}")`,
            }}
        >
            <span className='workItem-title'>{title}</span>
            {/* <img className='workItem-background' src={background} alt={`${title}`}/> */}
            <span className='workItem-button'>Toca para explorar</span>
        </div>
    )
}

export default WorkItem