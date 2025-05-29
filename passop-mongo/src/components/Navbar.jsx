import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 h-14 py-5 ">
        <div className="logo font-bold text-2xl">
        <span><img  className=" inline w-5 " src="icons\key.png" alt="key" /></span>
          <span className=" text-green-500">  &lt;</span>
           Pass
          <span className=" text-green-500">OP/ &gt;</span>
        </div>
        <button className="bg-green-700 rounded-full flex items-center justify-between ring-white ring-1">
          <img className="invert p-1 w-10 " src="icons/github.svg" alt="gitIcon"/>
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
