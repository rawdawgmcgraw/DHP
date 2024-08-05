import facebook from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import tiktok from "../images/tiktok-square.svg";
import spotify from "../images/spotify.svg";
import youtube from "../images/youtube.svg";
import ytMusic from "../images/youtube-music.svg";
import applemusic from "../images/apple-music.svg";
import mail from "../images/mail.svg";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full text-[4.5rem] font-retro py-12 items-center'>
      <h1 className='bg-gradient-to-r from-[#9e8b1f] via-blue-400 to-[#963939] text-transparent bg-clip-text'>
        Dusty Haze Project
      </h1>
      <div className='photo flex h-screen w-full mt-8 items-center justify-between'>
        <div className='grid grid-cols-2 grid-rows-2 ml-28'>
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={facebook}
            alt='Facebook'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={insta}
            alt='Instagram'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={tiktok}
            alt='TikTok'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={mail}
            alt='E-Mail'
          />
        </div>
        <div className='grid grid-cols-2 grid-rows-2 mr-28'>
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={spotify}
            alt='Spotify'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={youtube}
            alt='Youtube'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={ytMusic}
            alt='YouTube Music'
          />
          <img
            className='h-24 w-24 mx-4 col-span-1 row-span-1 my-4 hover:scale-110 ease-in duration-200 cursor-pointer'
            src={applemusic}
            alt='AppleMusic'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
