import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <Layout>
      <>
      <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full text-white">Hi. My name is</p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-white">
            Oscar Rosero.
          </h1>
          <p className="leading-normal text-2xl mb-8 text-[#64ffda]">
            Web developer
          </p>
          <p className="leading-normal text-xl mb-8 text-white">
            I'm a Junior web developer from Colombia.
          </p>

        </div>

        
      </div>
    </div>
    <div>
      <Projects/>
    </div>
    
      </>
    </Layout>
    
  )
}

export default Home