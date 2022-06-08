import React from 'react'
import "./styles.css"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const informationLIVariants = {
  hidden: {
    y: -15,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const ContactListItem = ({ href, content, icon }) => {
  return (
    <motion.li
      className='contactListItem'
      variants={informationLIVariants}
    >
      <a href={href} rel="noreferrer" target="_blank">
        <FontAwesomeIcon className='icon' icon={icon} />
        {content}</a>

    </motion.li>
  )
}

export default ContactListItem