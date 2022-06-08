import React from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import ContactListItem from '../ContactListItem'


const informationVariants = {
  hidden: {
    y: 10
  },
  visible: {
    y: 0
  }
}

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

function Contact({ id }) {
  return (
    <div
      id={id}
      className='contactContainer'
    >
      <SectionTitle content={"Contacto"} />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <div className="mapContainer">
        <iframe
          className='map'
          title='Alicante'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50057.879079335224!2d-0.5075436504068411!3d38.35783559215513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%20(Alacant)%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1644589788789!5m2!1ses!2sar" loading="lazy"></iframe>
      </div>
      <motion.div
        className="information"
        variants={informationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          staggerChildren: .1
        }}
      >
        <ul>
          <ContactListItem href="https://maps.google.com/maps?ll=38.357841,-0.472524&z=11&t=m&hl=es&gl=AR&mapclient=embed&q=Alicante%20(Alacant)%20Alicante%20Espa%C3%B1a" content={"Alicante, España"} icon={faLocation} />
          <ContactListItem href="https://wa.me/34661131235" content={"+34 661-131235"} icon={faWhatsapp} />
          <ContactListItem href="mailto:luigitell82@gmail.com" content={"luigitell82@gmail.com"} icon={faEnvelope} />
          <ContactListItem href="https://www.instagram.com/luigi_tell/" content={"@luigi_tell"} icon={faInstagram} />
        </ul>
      </motion.div>

    </div>
  )
}

export default Contact