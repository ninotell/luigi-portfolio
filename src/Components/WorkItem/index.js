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
            <span className='workItem-title'>{
                title === "weddings"
                    ? "Bodas"
                    : title === "portraits"
                        ? "retratos"
                        : title === "advertising"
                            ? "publicidad"
                            : title === "discos"
                                ? "discotecas"
                                : ""
            }</span>
            <span className='workItem-button'>Toca para explorar</span>
        </div>
    )
}

export default WorkItem