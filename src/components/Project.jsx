import React from "react";
import {getImageUrl} from "../utils";
const Project = ({ item }) => {
  return (
    <div className="group relative cursor-pointer hover:scale-105  m-3 w-[650px] h-[450px] font-roboto">
      <div className="abolute top-0 left-0 bg-gradient-to-b from-[#2c3a74] to-[#030d35] h-full w-full rounded-xl p-4 shadow-2xl text-white group-hover:opacity-0 ">
         
        <img className="rounded-lg h-[80%] w-[100%]" src={getImageUrl(item.image)} alt="" />
        <h1 className="text-2xl pt-2">{item.title}</h1>
        <h1 className="text-gray-500 text-xl font-semibold  ">
          {item.start_date}-{item.end_date}
        </h1>
         
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#2c3a74] to-[#030d35] h-full w-full p-4 rounded-xl shadow-2xl text-white group-hover:opacity-100 opacity-0">
        {console.log(item.skills.map((item) => {}))}
        <p className="text-2xl text-[#F6DCAC] px-1">Skills:</p>
        <div className="flex flex-wrap text-lg">
          {item.skills.map((item) => (
            <p className="p-2 bg-[#030d35] m-1 rounded-lg">{item} </p>
          ))}
        </div>
        <div className="px-1 pt-6">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <p className="text-2xl text-[#F6DCAC] ">Description:</p>
          <p className="pt-1 text-lg">

          {item.description}
          </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
