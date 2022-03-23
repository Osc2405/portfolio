import React from "react";
import Layout from "../components/Layout";
import profilePicture from "./../assets/img/profilePicture.jpeg";
import Skills from "../components/Skills";
import TimelineStudies from "../components/TimelineStudies";

const About = () => {
  return (
    <>
      <Layout>
        <section className='grid grid-cols-1 gap-8 text-white md:grid-cols-2 mx-8  '>
          <div className='pt-24'>
            <h2 className=' text-4xl '>Who am I?</h2>
            <p className=' pt-5 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit architecto aperiam molestias itaque laboriosam
              voluptas, maiores iusto dolorum. Eius quasi aliquid voluptatem
              autem odio dolorum quia molestias esse nobis pariatur.
            </p>
          </div>
          <div className='pt-10 md:pt-24 flex flex-col'>
            <div className='flex justify-center items-center'>
              <img
                src={profilePicture}
                alt='Profile picture'
                className=' rounded-full w-1/2 border border-gray-200'
              />
            </div>
          </div>
        </section>
        <section className='grid grid-cols-1 gap-8 text-white md:grid-cols-2 mx-8 pt-10'>
          <div className=''>
            <h2 className=' text-4xl '>Skills</h2>
            <Skills />
          </div>
          <div>
            <h2 className=' text-4xl '>Studies</h2>
            <TimelineStudies />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
