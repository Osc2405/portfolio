import React,{useState, useEffect} from 'react';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Projects = ({number}) => {
  const datos=[1,2,3,4,5,6];
  const [Repos, setRepos] = useState([])
  const [Loading, setLoading] = useState(true)
  const URL='https://api.github.com/users/Osc2405/repos?sort=fork&direction=desc'

  useEffect(() => {
    Axios({
      url: URL,
    })
      .then((response) => {
        setRepos(response.data.slice(0,number))
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    

  }, [setRepos]);



  return (
    <section className="text-white">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Projects:</h2>

      <p className="mt-4 text-gray-300">
        This are some of the things that I've created.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {Repos.map((dato)=>{
            return (
              <a
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10"
            href={dato.html_url}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className=' text-teal-400' />
    
            <h3 className="mt-4 text-xl font-bold text-white">{dato.name}</h3>
    
            <p className="mt-1 text-sm text-gray-300">
              {dato.description}
            </p>
            <div className='flex justify-start overflow-clip flex-wrap pt-5'>
            {dato.topics.map(topic=>{
              return (
                <p className=' bg-teal-700 border px-2 rounded-md  mx-1 my-1'>{topic}</p>
              )
            })}
            </div>
          </a>
            )
        })}
    </div>

    <div className="mt-12 text-center">
      <a
        className="inline-flex items-center px-8 py-3 mt-8 text-white bg-teal-600 border border-teal-600 rounded hover:bg-transparent active:text-teal-500 focus:outline-none focus:ring"
        href="/get-started"
      >
        <span className="text-sm font-medium"> See more </span>

        <svg
          className="w-5 h-5 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section>
  )
}

export default Projects