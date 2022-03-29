import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";
import profilePicture from "./../assets/img/profilePicture.jpeg";

const Home = () => {
  return (
    <Layout>
      <>
        <div className='pt-24'>
          <div className='container px-3 mx-auto grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='items-start text-center md:text-left '>
              <p className='uppercase tracking-loose w-full text-white font-bold text-2xl'>
                Hi. I am...
              </p>
              <p className='my-4 text-5xl font-bold leading-tight text-white'>
                Oscar Rosero.
              </p>
              <p className='leading-normal text-2xl mb-8 text-[#64ffda]'>
                Web developer
              </p>
              <p className='leading-normal text-xl mb-8 text-white'>
                I'm a Junior web developer from Colombia.
              </p>
            </div>
            <div className='pt-10 md:pt-10'>
              <div className='flex justify-center items-center'>
                <img
                  src={profilePicture}
                  alt='This is me'
                  className=' rounded-full w-1/2 md:w-2/3 border border-gray-200'
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Projects number={6} />
          <div className=' text-center'>
            <Link
              className='inline-flex items-center px-8 py-3 mt-8 text-white bg-teal-600 border border-teal-600 rounded hover:bg-transparent active:text-teal-500 focus:outline-none focus:ring'
              to='/projects'>
              <span className='text-sm font-medium'> See more </span>

              <svg
                className='w-5 h-5 ml-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
