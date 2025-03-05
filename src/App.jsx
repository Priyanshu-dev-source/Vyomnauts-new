// // App.js
// // import { Analytics } from "@vercel/analytics/react"
// // import AdminLogin from './AdminDashboars';
// // import AdminPublishing from './AdminDash';
// import { useState, useEffect } from "react";
// import { Routes, Route } from 'react-router-dom';
// import LandingPage from './Landing';
// import ProjectSlider from './BackgroundSlider';
// import BlogListingPage from './Blogs';
// import EventsPage from './OurEvent';
// import AboutUsPage from './NewAboutUs'
// import { JoinUsPage } from './JoinUs';
// import logo from './assets/logo.png';
// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loading && setTimeout(() => setLoading(false), 3000);
//   },[]);

//   return (
//     <>
//     {loading ?
//       (<div className='md:h-dvh md:w-full h-[1900px] w-[450px] md:w-svh overflow-hidden bg-black flex justify-center items-center'>
//           <img src={logo} alt="Loading....." className='absolute md:right-[600px] right-[90px] md:bottom-[180px] bottom-[180px] h-[180px] w-[180px] md:w-[300px] animate-bounceInfinite md:h-[300px]'/>
//       </div>) :
//     (
//     <div className=''>
//         <Routes>
//           {/* <Analytics/> */}
//           <Route path="/" element={<LandingPage/>} />
//           <Route path="/about" element={<AboutUsPage />} />
//           <Route path="/projects" element={<ProjectSlider />} />
//           <Route path="/blogs" element={<BlogListingPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/join" element={<JoinUsPage />} />
//           {/* <Route path="/adminlogin" element={<AdminLogin/>} /> */}
//           {/* <Route path="/admindash" element={<AdminPublishing />} /> */}
//         </Routes>
//       </div>
//     )}
//     </>
//   );
// };

// export default App;

import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png';

// Lazy load components
const LandingPage = lazy(() => import('./Landing'));
const ProjectSlider = lazy(() => import('./BackgroundSlider'));
const BlogListingPage = lazy(() => import('./Blogs'));
const EventsPage = lazy(() => import('./OurEvent'));
const AboutUsPage = lazy(() => import('./NewAboutUs'));
const JoinUsPage = lazy(() => import('./JoinUs'));

// Loading Screen Component
const LoadingScreen = () => (
  <div className='md:h-dvh md:w-full h-[1990px] w-[450px] md:w-svh overflow-hidden bg-black flex justify-center items-center'>
           <img src={logo} alt="Loading....." className='absolute md:right-[630px] right-[50px] md:bottom-[180px] bottom-[180px] h-[180px] w-[180px] md:w-[300px] animate-bounceInfinite md:h-[300px]'/>
       </div>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);

  useEffect(() => {
    // Start loading components in the background
    const loadTimeout = setTimeout(() => {setMinimumTimeElapsed(true)
      setIsLoaded(true);
    }, 5000); // Ensure animation runs for at least 5s
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {!isLoaded || !minimumTimeElapsed ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectSlider />} />
          <Route path="/blogs" element={<BlogListingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinUsPage />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;


