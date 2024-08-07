import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PicCollage from "./components/PicCollage";

function App() {
  return (
    <div className='flex flex-col'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='./components/PicCollage.jsx' element={<PicCollage />} />
        </Routes>
        <PicCollage />
      </Router>
    </div>
  );
}

export default App;
