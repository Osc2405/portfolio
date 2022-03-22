import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faTwitter,faInstagram,faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import ContactForm from './ContactForm'


const Footer = () => {
  return (
    <footer className="text-center text-white ">
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div className=" max-w-screen-xl  mx-auto space-y-6">
        <div className="flex justify-center space-x-6">
          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300"
            href="https://twitter.com/Osc245"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300"
            href="https://github.com/Osc2405"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300"
            href="https://www.linkedin.com/in/oscar-eduardo-rosero-ordo%C3%B1ez-875258191/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300"
            href="https://www.instagram.com/oscarrosero1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300"
            href="https://wa.link/ii790z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>


        </div>
        <div className=" grid gap-8 p-8 font-bold border-4  rounded-xl grid-cols-1 text-left md:grid-cols-2 md:place-content-center">
          <div className='text-center md:text-left'>
      
              <h2 className=' mb-4  text-3xl '>Contact Info:</h2>
              <p className=' text-2xl'>Email:</p>
              <p className=' text-xl pb-8'>orosero2405@gmail.com</p>
              <p className=' text-2xl'>Number:</p>
              <p className=' text-xl pb-8'>+57 311 397 8615</p>
              <p className=' text-2xl'>Valle del Cauca-Colombia</p>
              
 
          </div>
          <div className='w-full bg-gray-900 px-4 py-4 border rounded-xl '>
            <h2 className='mb-4  text-3x1 text-center md:text-left '>Contact me!</h2>
              <ContactForm/>
          </div>
        </div>
        

        <p className="max-w-lg mx-auto text-xs">
          Hay que poner aqui alguna frase motivadora

        </p>

        <p className="text-xs font-medium">2022 Oscar Rosero</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer