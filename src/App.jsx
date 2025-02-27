// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Landing';
import TeamPage from './AboutUs';
import ProjectSlider from './BackgroundSlider';
import BlogListingPage from './Blogs';
import EventsPage from './OurEvent';
import AboutUsPage from './NewAboutUs'
import AdminLogin from './AdminDashboars';
import AdminPublishing from './AdminDash';
import { useState, useEffect } from "react";
import { JoinUsPage } from './JoinUs';
// import logo  from './assets/logo.png';
const App = () => {


  return (
    <>
    {/* {loading ?
      (<div className='h-[100dvh] w-full overflow-hidden bg-black flex justify-center items-center'>
        <div className='h-[400px] w-[400px] flex justify-center animate-bounceInfinite items-center'>
          <img src={logo} alt="Loading....." className='w-[300px] h-[300px]'/>
        </div>
      </div>) :  
    ( */}
    <div className=''>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectSlider />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/join" element={<JoinUsPage />} />
        {/* <Route path="/adminlogin" element={<AdminLogin/>} /> */}
        {/* <Route path="/admindash" element={<AdminPublishing />} /> */}
      </Routes>
      </div>
    {/* }  */}
    </>
  );
};

export default App;
