import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png';

const LandingPage = lazy(() => import('./Landing'));
const ProjectSlider = lazy(() => import('./BackgroundSlider'));
const BlogListingPage = lazy(() => import('./Blogs'));
const EventsPage = lazy(() => import('./OurEvent'));
const AboutUsPage = lazy(() => import('./NewAboutUs'));
const JoinUsPage = lazy(() => import('./JoinUs'));
const Emagazine = lazy(() => import('./Emagazine'));

const LoadingScreen = () => (
  <div className='h-dvh w-full md:w-svh overflow-hidden bg-black flex justify-center items-center'>
    <img src={logo} alt="Loading....." className= 'h-[180px] w-[180px] md:w-[300px] animate-bounceInfinite md:h-[300px]'/>
  </div>
);

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadTime = setTimeout(() => setIsLoading(false), 4000); 
    return () => clearTimeout(minLoadTime);
  }, []);
  
  console.log(document.body.innerText);

  return (
    <Suspense fallback={<LoadingScreen />}>
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectSlider />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/join" element={<JoinUsPage />} />
        <Route path="/emagazine" element={<Emagazine />} />
      </Routes>
    )}
  </Suspense>
  );
};

export default App;