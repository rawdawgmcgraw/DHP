import facebook from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import tiktok from "../images/tiktok-square.svg";
import spotify from "../images/spotify.svg";
import youtube from "../images/youtube.svg";
import ytMusic from "../images/youtube-music.svg";
import applemusic from "../images/apple-music.svg";
import mail from "../images/mail.svg";

const iconStyle =
  "xl:h-24 xl:w-24 lg:h-18 lg:w-18 md:h-12 md:w-12 2xl:mx-8 2xl:my-8 xl:mx-4 xl:my-4 mx-2 my-2 col-span-1 row-span-1 hover:scale-110 ease-in duration-200 cursor-pointer";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full text-[4.5rem] font-retro py-12 items-center'>
      <h1 className='bg-gradient-to-r from-[#9e8b1f] via-blue-400 to-[#963939] text-transparent bg-clip-text'>
        Dusty Haze Project
      </h1>
      <div className='photo flex h-screen w-full mt-8 items-center justify-between'>
        <div className='grid grid-cols-2 grid-rows-2 2xl:ml-28 xl:mx-12'>
          <img className={iconStyle} src={facebook} alt='Facebook' />
          <img className={iconStyle} src={insta} alt='Instagram' />
          <img className={iconStyle} src={tiktok} alt='TikTok' />
          <img className={iconStyle} src={mail} alt='E-Mail' />
        </div>
        <div className='grid grid-cols-2 grid-rows-2 2xl:mr-28 xl:mx-12'>
          <img className={iconStyle} src={spotify} alt='Spotify' />
          <img className={iconStyle} src={youtube} alt='Youtube' />
          <img className={iconStyle} src={ytMusic} alt='YouTube Music' />
          <img className={iconStyle} src={applemusic} alt='AppleMusic' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
