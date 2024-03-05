import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
  
  export default routes;
  