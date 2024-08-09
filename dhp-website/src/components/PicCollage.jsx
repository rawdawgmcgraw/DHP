import d1 from "../images/dhp1.jfif";
// import d2 from "../images/dhp2.jfif";
// import d3 from "../images/dhp3.jfif";
import d4 from "../images/dhp4.jfif";
// import d5 from "../images/dhp5.jfif";
// import d6 from "../images/dhp6.jpg";
// import d7 from "../images/dhp7.jpg";
// import d8 from "../images/dhp8.jpg";
// import d9 from "../images/dhp9.jpg";
// import ds from "../images/dhpSized.png";
// import ds1 from "../images/dhpSized1.png";
// import ds2 from "../images/dhpSized2.png";
// import ds3 from "../images/dhpSized3.png";
// import ds4 from "../images/dhpSized4.png";
// import ds5 from "../images/dhpSized5.png";

const PicCollage = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center'>
      <div className='mt-4'>
        <img src={d4} alt='' />
      </div>
      <div className='flex max-w-[720px] items-center justify-between'>
        <div>
          <img src={d1} alt='' />
        </div>
      </div>
    </div>
  );
};

export default PicCollage;
