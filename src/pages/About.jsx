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
              I'm a web developer centered in backend from Colombia. I have a
              serious passion for learn and improve my habilities.
            </p>
            <p className=' pt-5 text-justify'>
              {" "}
              I'm a well organised person, problem solver and proactive. Fan of
              outdoor activities and TV series.
            </p>
            <p className=' pt-5 text-justify'>
              {" "}
              Interested in work on ambitious projects with positive people.
            </p>
          </div>
          <div className='pt-10 md:pt-24 flex flex-col justify-center items-center'>
            <img
              src={profilePicture}
              alt='This is me'
              className=' rounded-full w-1/2 md:w-2/3 border border-gray-200'
            />
          </div>
        </section>
        <section className='grid grid-cols-1 mb-10 text-white md:grid-cols-2 pt-20 '>
          <div className='border-r-2 border-r-white'>
            <div className='mx-8'>
              <h2 className=' text-4xl '>Studies</h2>
              <TimelineStudies />
            </div>
          </div>
          <div className=' mx-8'>
            <h2 className=' text-4xl '>Skills</h2>
            <Skills />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
