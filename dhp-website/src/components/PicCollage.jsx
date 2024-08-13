import d4 from "../images/dhp4.jfif";
import d5 from "../images/dhp5.jpg";
import ds from "../images/dhpSized.png";
import ds1 from "../images/dhpSized1.png";
import ds2 from "../images/dhpSized2.png";
import ds3 from "../images/dhpSized3.png";
import ds4 from "../images/dhpSized4.png";
import ds5 from "../images/dhpSized5.png";
import ds6 from "../images/dhpSized6.png";
import Header from "./Header";

const PicCollage = () => {
  return (
    <div className='collage-container h-screen w-full'>
      <Header />
      <div className='flex flex-col items-center'>
        <div className='my-8 mx-4'>
          <img className='rounded-3xl opacity-80' src={d4} alt='' />
        </div>
        <div className='flex max-w-[720px] items-center'>
          <div className='grid grid-cols-4 grid-rows-2 place-items-center gap-4 mx-4 md:-mx-0'>
            <div className='shadow-md hover:shadow-lg shadow-violet-700 hover:shadow-violet-700 ease-in duration-200 rounded-full'>
              <a href='https://youtube.com/@dhp240?si=7-V_Ysu_iv0kq3EE'>
                <img className='image hover:scale-110' src={ds} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-blue-600 hover:shadow-blue-600 ease-in duration-200 rounded-full'>
              <a href='https://youtu.be/hkQnU_78dBE?si=apw8pRKaKI2UJgvC'>
                <img className='image hover:scale-110' src={ds1} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-teal-500 hover:shadow-teal-500 ease-in duration-200 rounded-full'>
              <a href='https://www.facebook.com/share/fvHxt2WYUjHBqNwm/?mibextid=qi2Omg'>
                <img className='image hover:scale-110' src={ds2} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-slate-400 hover:shadow-slate-400 ease-in duration-200 rounded-full'>
              <a href='https://www.instagram.com/hazedusty/'>
                <img className='image hover:scale-110' src={ds3} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-orange-400 hover:shadow-orange-400 ease-in duration-200 rounded-full'>
              <a href=''>
                <img className='image hover:scale-110' src={ds4} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-gray-200 hover:shadow-green-200 ease-in duration-200 rounded-full'>
              <a href=''>
                <img className='image hover:scale-110' src={ds5} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-sky-700 hover:shadow-sky-700 ease-in duration-200 rounded-full'>
              <a href=''>
                <img className='image hover:scale-110' src={ds6} alt='' />
              </a>
            </div>
            <div className='shadow-md hover:shadow-lg shadow-pink-300 hover:shadow-pink-300 ease-in duration-200 rounded-full'>
              <a href=''>
                <img className='image hover:scale-110' src={d5} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicCollage;
