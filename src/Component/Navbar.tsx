// import React from 'react'
import moonlight from "../assets/moonlight.svg"


const Navbar = () => {

    return (
        <div className="bg-white py-7">
        <div className="mx-7 justify-between flex">
            <div className="navbar-question">
                <h2 className="text-black text-lg font-bold">Where in the world?</h2>
            </div>
            <div className="dark-mode flex items-center font-semibold">
                <img className="w-5 h-5 mr-2" src={moonlight} alt="light-mode" />
                <p className="text-black ">Dark mode</p>
            </div>
        </div>
        </div>
    )
  }
  
  export default Navbar
  
  
