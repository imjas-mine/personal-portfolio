import React from 'react'
import skills from '../Data/skills.json'

import Skill from './Skill'
const Skills = () => {
  return (
    <div  id='skills' className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto">
    <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent mt-32">
      SKILLS
    </h1>
    <div className="flex  w-full flex-wrap justify-center items-center">
        {skills.skills.map((item)=>(
           <Skill item={item}></Skill>
        ))}
    </div>
  </div>
  )
}

export default Skills
