import React from "react";

const TimelineStudies = () => {
  return (
    <div>
      <ol className='relative border-l border-gray-700 pt-4'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-[#64ffda]'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            December 2021
          </time>
          <h3 className='text-lg font-semibold text-white pb-2'>
            Conocimientos acádemicos en habilidades en programación con énfasis
            en aplicaciones web
          </h3>
          <p className='mb-4 text-base font-normal text-gray-400 text-justify'>
            A program created by the Ministry of Information Technologies and
            Communications of Colombia{" "}
            <a
              href='https://www.mintic.gov.co/portal/inicio/'
              target={"_blank"}
              className=' text-[#64ffda] hover:underline'>
              MinTIC
            </a>{" "}
            and the{" "}
            <a
              href='https://www.uninorte.edu.co/'
              target={"_blank"}
              className='text-[#64ffda] hover:underline'>
              Universidad del Norte
            </a>{" "}
          </p>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-[#64ffda]'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            March 2022
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Biomedical engineering
          </h3>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            A professional program of the{" "}
            <a
              href='https://www.uao.edu.co/'
              target={"_blank"}
              className='text-[#64ffda] hover:underline'>
              Universidad Autonoma de Occidente
            </a>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineStudies;
