import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ number = 0 }) => {
  const [Repos, setRepos] = useState([]);
  const URL =
    "https://api.github.com/users/Osc2405/repos?sort=fork&direction=desc";

  useEffect(() => {
    Axios({
      url: URL,
    })
      .then((response) => {
        setRepos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRepos]);

  return (
    <section className='text-white'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Projects:</h2>

          <p className='mt-4 text-gray-300'>
            This are some of the things that I've created.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
          {number === 0 &&
            Repos.map((dato) => {
              return (
                <a
                  className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10'
                  to={dato.html_url}
                  target='_blank'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size='2x'
                    className=' text-teal-400'
                  />

                  <h3 className='mt-4 text-xl font-bold text-white'>
                    {dato.name}
                  </h3>

                  <p className='mt-1 text-sm text-gray-300'>
                    {dato.description}
                  </p>
                  <div className='flex justify-start overflow-clip flex-wrap pt-5'>
                    {dato.topics.map((topic) => {
                      return (
                        <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
                          {topic}
                        </p>
                      );
                    })}
                  </div>
                </a>
              );
            })}
          {number > 0 &&
            Repos.slice(0, number).map((dato) => {
              return (
                <a
                  className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10'
                  href={dato.html_url}
                  target='_blank'
                  rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size='2x'
                    className=' text-teal-400'
                  />

                  <h3 className='mt-4 text-xl font-bold text-white'>
                    {dato.name}
                  </h3>

                  <p className='mt-1 text-sm text-gray-300'>
                    {dato.description}
                  </p>
                  <div className='flex justify-start overflow-clip flex-wrap pt-5'>
                    {dato.topics.map((topic) => {
                      return (
                        <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
                          {topic}
                        </p>
                      );
                    })}
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
