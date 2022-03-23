import React from "react";

const Skills = () => {
  return (
    <>
      <div className=' pt-1'>
        <p className=' text-xl pt-4 pb-2 '>Front-end</p>
        <div className=' w-full rounded-full h-2.5 bg-gray-700'>
          <div
            className=' bg-blue-600 h-2.5 rounded-full'
            style={{ width: "70%" }}></div>
        </div>
        <p className=' text-xl pt-4 pb-2 '>React</p>
        <div className=' w-full rounded-full h-2.5 bg-gray-700'>
          <div
            className=' bg-[#61DBFB] h-2.5 rounded-full '
            style={{ width: "65%" }}></div>
        </div>
        <p className=' text-xl pt-4 pb-2 '>Back-end</p>
        <div className=' w-full rounded-full h-2.5 bg-gray-700'>
          <div
            className=' bg-red-600 h-2.5 rounded-full'
            style={{ width: "90%" }}></div>
        </div>
        <p className=' text-xl pt-4 pb-2 '>Flask</p>
        <div className=' w-full rounded-full h-2.5 bg-gray-700'>
          <div
            className=' bg-gray-200 h-2.5 rounded-full'
            style={{ width: "90%" }}></div>
        </div>
        <p className=' text-xl pt-4 pb-2 '>Node.js</p>
        <div className=' w-full rounded-full h-2.5 bg-gray-700'>
          <div
            className=' bg-[#3C873A] h-2.5 rounded-full'
            style={{ width: "87%" }}></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
