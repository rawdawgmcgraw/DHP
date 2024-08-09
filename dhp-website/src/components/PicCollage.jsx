import d4 from "../images/dhp4.jfif";
import d5 from "../images/dhp5.jpg";
import ds from "../images/dhpSized.png";
import ds1 from "../images/dhpSized1.png";
import ds2 from "../images/dhpSized2.png";
import ds3 from "../images/dhpSized3.png";
import ds4 from "../images/dhpSized4.png";
import ds5 from "../images/dhpSized5.png";
import ds6 from "../images/dhpSized6.png";

const PicCollage = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center'>
      <div className='my-8'>
        <img className='rounded-3xl' src={d4} alt='' />
      </div>
      <div className='flex max-w-[720px] items-center'>
        <div className='grid grid-cols-4 grid-rows-2 place-items-center gap-4'>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds1}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds2}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds3}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds4}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds5}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={ds6}
              alt=''
            />
          </div>
          <div className='shadow-md shadow-yellow-400 rounded-full'>
            <img
              className='rounded-full hover:opacity-60 cursor-pointer'
              src={d5}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicCollage;
