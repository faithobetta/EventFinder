import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Events from './Components/pages/Events';
import Categories from './Components/pages/Categories';
import About from './Components/pages/About';
import Login from './Components/pages/Login';
import Footer from './Components/footer/Footer';
import Single from './Components/pages/Single';
import Category from './Components/pages/Category';





function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/single/:id" element={<Single />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      {/* <FetchData /> */}
      <Footer/>
    </React.Fragment>
  );
}

export default App;
