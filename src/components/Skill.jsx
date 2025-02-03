import React from "react";

const Skill = ({ item }) => {
  console.log({ item });
  function handleClick(){
    window.open(item.credential,'_blank');
  }
  return (
    <div className="group relative cursor-pointer hover:scale-105 m-3 w-[150px] h-[150px] font-roboto rounded-full overflow-hidden flex justify-center items-center">
    <div className="absolute top-0 left-0 bg-gradient-to-b from-[#2c3a74] to-[#030d35] h-full w-full flex justify-center items-center rounded-xl p-4 shadow-2xl text-white group-hover:opacity-60">
      <h1 className="text-xl pt-2 font-bold text-center">{item.title}</h1>
    </div>
  </div>
  );
};

export default Skill;
