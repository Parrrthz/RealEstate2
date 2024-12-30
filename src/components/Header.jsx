import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import UserIcon from "../assets/user.svg";

const Header = () => {
  const [active,setActive] = useState(false)
  const [menuOpened, setMenuOpened] = useState(close);
  const toggleMenu = () => setMenuOpened(!menuOpened);


  useEffect(()=>{
    const handleScroll = ()=>{
      if (window.scrollY > 0){
        // close the menu if open when scrolling occcurs
        if(menuOpened){
          setMenuOpened(false);
        }
      }
      //detect scroll
      setActive(window.scrollY > 40);
    }; 
    window.addEventListener("scroll",handleScroll);
    //clean up the event listner when component unmounts
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[menuOpened]);//dependency array ensure that the effect runs when menuOpened Change 
  return (
    // <header >
    <header className="max-padd-container fixed top-1 w-full left-0 right-0 z-50">
      {/* container */}
      <div className={`${active ? "py-0" : "py-1"}max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5`}>
  
        <div className="flexBetween py-3">
          {/* logo */}
          <Link to={"/"}>
            <span className="font-[900] text-[24px] ">
              Lotus <span className="font-[600] medium-20">Nest</span>
            </span>
          </Link>
          {/* navbar */}
          <div className="flexCenter gap-x-4">
            {/* Desktop */}
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap=x=10 capitalize medium=15 ring=1 ring-slate=900/10 rounded-full p-2 bg-primary"
              }
            />
            {/* Mobile */}
            <Navbar
              containerStyles={
                menuOpened
                  ? "felx items-start flex-cal gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded=3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "felx items-start flex-cal gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded=3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              }
            />
          </div>
          {/* Button*/}
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            )}
            <button className="btn-secondary flexCenter gap-x-2 medium-16 rounded-full">
              <img src={UserIcon} alt="" height={22} width={22} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
