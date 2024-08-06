import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='flex'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
