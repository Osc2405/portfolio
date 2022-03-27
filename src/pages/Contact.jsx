import React from "react";
import Header from "./../components/Header";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <main className=' min-h-scren bg-black font-serif'>
        <Header />
        <section className=' text-white mx-8 pt-24 flex flex-col h-screen  '>
          <h2 className='text-center uppercase text-xl'>Contact me!</h2>
          <div className=''>
            <div className='pt-8 text-2xl'>
              <h2 className=' '>Email:</h2>
              <p className=' '>orosero2405@gmail.com</p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
