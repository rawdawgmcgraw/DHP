import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navBarLinkStyle =
    "hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-gradient-to-r from-[#9e8b1f] to-[#963939] shadow-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200";
  return (
    <div className='block'>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-12 right-12 z-[99] text-white cursor-pointer size-8'
      />

      {nav ? (
        <div className='fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20 text-white font-bronco text-xl'>
          <Link
            to='/'
            onClick={handleNav}
            href='#main'
            className={navBarLinkStyle}
          >
            <span>Home</span>
          </Link>
          <Link
            to='/bio'
            onClick={handleNav}
            href='#bio'
            className={navBarLinkStyle}
          >
            <span>Bio</span>
          </Link>
          <a onClick={handleNav} href='#videos' className={navBarLinkStyle}>
            <span>Videos</span>
          </a>
          <a onClick={handleNav} href='#streaming' className={navBarLinkStyle}>
            <span>Resume</span>
          </a>
          <a onClick={handleNav} href='#extra' className={navBarLinkStyle}>
            <span>Lil Extra Sumthin</span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
