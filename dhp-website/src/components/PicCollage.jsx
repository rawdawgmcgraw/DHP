import d1 from "../images/dhp1.jfif";
import d2 from "../images/dhp2.jfif";
import d3 from "../images/dhp3.jfif";
import d4 from "../images/dhp4.jfif";
import d5 from "../images/dhp5.jfif";
import d6 from "../images/dhp6.jpg";
import d7 from "../images/dhp7.jpg";
import d8 from "../images/dhp8.jpg";
import d9 from "../images/dhp9.jpg";

const PicCollage = () => {
  return (
    <div>
      <div className='grid grid-cols-4 grid-rows-3 h-screen w-full gap-4 p-14'>
        <div className='flex col-span-1 row-span-2 items-center justify-center contain-content'>
          <img
            src={d1}
            alt='Dusty Haze at the Support Local Music Awards in Houston, TX'
          />
        </div>
        <div className='flex col-span-1 row-span-1 items-center justify-center contain-content'>
          <img src={d2} alt='Dusty Haze Project live at Acadia' />
        </div>
        <div className='flex col-span-1 row-span-2 items-center justify-center contain-content'>
          <img
            src={d9}
            alt='Dusty Haze Project at the Support Local Music Awards in Houston, TX'
          />
        </div>
        <div className='flex col-span- row-span-1 items-center justify-center contain-content'>
          <img src={d3} alt='DJ Smiley of the Dusty Haze Project' />
        </div>
        <div className='flex col-span-1 row-span-1 items-center justify-center contain-content'>
          <img src={d5} alt='#' />
        </div>
        <div className='flex col-span-1 row-span-1 items-center justify-center contain-content'>
          <img
            src={d6}
            alt='Dusty Haze Project performing live at B.F.E. Rock Club in Houston, TX'
          />
        </div>
        <div className='flex col-span-2 row-span-2 items-center justify-center contain-content'>
          <img src={d4} alt='#' />
        </div>
        <div className='flex col-span-1 row-span-1 items-center justify-center contain-content'>
          <img src={d7} alt='#' />
        </div>
        <div className='flex col-span-1 row-span-1 items-center justify-center contain-content'>
          <img src={d8} alt='#' />
        </div>
      </div>
    </div>
  );
};

export default PicCollage;
