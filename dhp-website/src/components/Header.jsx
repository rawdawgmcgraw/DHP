const Header = () => {
  return (
    <div className='flex text-white h-12 w-full items-center justify-between'>
      <div className='ml-6 font-bold text-3xl text-yellow-600'>
        <h1>Dusty Haze Project</h1>
      </div>
      <div className='mr-6 text-xl flex'>
        <a className='mx-2' href=''>
          About
        </a>
        <div className='flex flex-col'>
          <a className='mx-2' href=''>
            Socials
          </a>
        </div>
        <a className='mx-2' href=''>
          Streaming
        </a>
      </div>
    </div>
  );
};

export default Header;
