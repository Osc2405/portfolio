import React from "react";
import Header from "./../components/Header";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import undraw_personal from "./../assets/img/undraw_personal_info_re_ur1n.svg";
import undraw_profile2 from "./../assets/img/undraw_profile_details_re_ch9r.svg";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <main className=' min-h-scren bg-black font-sans'>
        <Header />
        <section className=' text-white mx-8 pt-20 h-full '>
          <h2 className='text-center uppercase font-bold text-3xl '>
            Basic Information
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='pt-3 md:pt-5 text-2xl'>
              <div className='block md:items-center md:text-center'>
                <p className=' font-bold  pt-3'>Name:</p>
                <p className=' '>Oscar Eduardo Rosero Ordoñez</p>

                <p className=' font-bold  pt-3'>Email:</p>
                <p className=''>orosero2405@gmail.com</p>

                <p className=' font-bold  pt-3'>Number:</p>
                <p className=''>+57 311 397 8615</p>

                <p className=' font-bold  pt-3'>City:</p>
                <p className=' '>Yumbo - Valle del Cauca - Colombia</p>
              </div>
            </div>
            <div className=' md:pt-5 text-2xl flex items-center justify-center'>
              <img
                src={undraw_profile2}
                alt='Contact'
                className='hidden md:block md:w-1/2'
              />
            </div>
          </div>
          <div className='w-full bg-black px-4 py-4 pt-10 '>
            <h2 className='mb-4  text-center uppercase font-bold text-3xl  '>
              Contact me!
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex items-center justify-center'>
                <img
                  src={undraw_personal}
                  alt='Contact'
                  className='hidden md:block'
                />
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className='pb-10'>
            <div className='flex justify-center space-x-6'>
              <a
                className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'
                href='https://twitter.com/Osc245'
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>

              <a
                className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'
                href='https://github.com/Osc2405'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>

              <a
                className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'
                href='https://www.linkedin.com/in/oscar-eduardo-rosero-ordo%C3%B1ez-875258191/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>

              <a
                className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'
                href='https://www.instagram.com/oscarrosero1'
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram'>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </a>
              <a
                className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'
                href='https://wa.link/ii790z'
                target='_blank'
                rel='noreferrer'
                aria-label='WhatsApp'>
                <FontAwesomeIcon icon={faWhatsapp} size='2x' />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
