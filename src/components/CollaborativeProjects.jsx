import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CollaborativeProjects = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 text-white'>
      <div className='max-w-lg mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>
          Collaborative projects:
        </h2>

        <p className='mt-4 text-gray-300'>
          These are some of the projects I have worked on with other colleagues.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
        <a
          className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10'
          href='https://github.com/Diegomez0282021/Plataforma-transporte-maritimo---Grupo-9-Mintic'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
            className=' text-teal-400'
          />

          <h3 className='mt-4 text-xl font-bold text-white'>
            Plataforma transporte maritimo MinTIC
          </h3>

          <p className='mt-1 text-sm text-gray-300'>
            Frontend part of a project created as the final work of the MinTIC's
            project "Mision TIC 2022" using React.js
          </p>
          <div className='flex justify-start overflow-clip flex-wrap pt-5'>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              React JS
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              API consumbtion
            </p>
          </div>
        </a>
        <a
          className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10'
          href='https://github.com/Diegomez0282021/BackendPlataformaMaritima'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
            className=' text-teal-400'
          />

          <h3 className='mt-4 text-xl font-bold text-white'>
            Backend Plataforma transporte maritimo MinTIC
          </h3>

          <p className='mt-1 text-sm text-gray-300'>
            Rest API created as the backend part of the final work of the
            MinTIC's project "Mision TIC 2022" using Node.js, Express and
            MongoDB
          </p>
          <div className='flex justify-start overflow-clip flex-wrap pt-5'>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              Node.js
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              Express
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              MongoDB
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              API Rest
            </p>
          </div>
        </a>
        <a
          className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10'
          href='https://github.com/osc24/proyecto_misionTIC_equipo6'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
            className=' text-teal-400'
          />

          <h3 className='mt-4 text-xl font-bold text-white'>
            Proyecto MisionTIC equipo 6
          </h3>

          <p className='mt-1 text-sm text-gray-300'>
            Web app created using Flask and SQLite in the backend and HTML, CSS,
            JavaScript and Bootstrap in the frontend. <br />
            In this project I used other user (osc24) besides my usual github
            user (osc2405)
          </p>
          <div className='flex justify-start overflow-clip flex-wrap pt-5'>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              Flask
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              SQLite
            </p>
            <p className=' bg-teal-600 border border-gray-400 px-2 rounded-md  mx-1 my-1'>
              Bootstrap
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CollaborativeProjects;
