import React from "react";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknyzkyn");
  if (state.succeeded) {
    return <p>Thanks for contact me!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=' mb-6'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-white'>
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='name'
            className='border  text-sm rounded-lg  focus:border-teal-400 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 '
          />
        </div>

        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-white'>
          Email Address
        </label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='name@email.com'
          className='border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 '
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label
          htmlFor='message'
          className='block mt-2 mb-2 text-sm font-medium text-white'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          placeholder="Hi, I'm from... "
          className='border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 '
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          type='submit'
          disabled={state.submitting}
          className='text-white  mt-5  focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800 '>
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
