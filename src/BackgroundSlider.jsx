import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Youtube } from 'lucide-react';
import Navbar from './Navbar';
import img from "./assets/projectmedia/bilkulreport.png";
import p1 from "./assets/pojects/cansat231.png"
import p2 from "./assets/pojects/cansat241.png"
import p3 from "./assets/pojects/rocekt251.png"
import BgVideoScroll from './BigVideoScroll';
const ProjectsSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [showCarousel, setShowCarousel] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [{
    title: 'CanSat 2023-24',
    description: "PSIT Vyomnauts, as PSIT Cosmonauts, successfully designed, launched, and soft-landed 'Abhaycharan' at IN-SPACe CanSat 2024, organized by the Astronautical Society of India and IN-SPACe in collaboration with ISRO. Competing against 84 top colleges, including IIT Bombay, IIT Madras, and BITS Pilani, we qualified all five rounds and launched in the presence of ISRO Chairman Shri S. Somanath, securing a top rank.",
    status: 'Completed',
    mediaLinks: [
      { 
        title: "PSIT COSMONAUTS lead the way at National Student CanSat India Competition", 
        source: "Bilkul Online News", 
        date: "Dec 2023", 
        url: "https://bilkulonline.com/2024/04/19/psit-cosmonauts-lead-the-way-at-national-student-cansat-india-competition/?amp=1",
        image: img
      },
    ],
    youtubeLinks: [
      { title: "Project Achievement", url: "https://youtu.be/o-clHa2XTLk?si=xZO2vwdK75DAqti6" },
      { title: "Recognition by DD Gujarati", url: "https://www.youtube.com/live/AUc1juXQ5n0?si=38cB3ZWCywiZj-aP" },
    ],
   image : p1
  },
  {
    title: 'CanSat 2024-25',
    description: "PSIT Vyomnauts is thrilled to participate in IN-SPACe CanSat 2024-25, a competition that fuels our passion for aerospace innovation. This year, we continue our journey with Rohini Sat, a milestone from our past successes. With unwavering determination, we have successfully qualified the Preliminary Design Review (PDR) and are now preparing for the Critical Design Review (CDR), aiming to set new benchmarks in CanSat design and aerospace exploration..",
    status: 'Ongoing',
    mediaLinks: [],
    youtubeLinks: [],
    image : p2
  },
  {
    title: 'Rocketry 2024-25',
    description: "The thrill of rocketry is set to soar as PSIT Vyomnauts gear up for Rocketry 2024-25, organized by IN-SPACe and ISRO, with Team Sudarshan and its cutting-edge rocket, Trishul. A symbol of innovation, precision, and engineering excellence, Trishul represents our dedication to advancing rocketry technology. Competing in India’s first-ever rocketry competition, our team has successfully qualified two rounds and is now preparing for the Mission Readiness Review (MRR). With rigorous testing and refinement, we aim to push the boundaries of propulsion, aerodynamics, and advanced rocket design, making history with every launch.",
    status: 'Ongoing',
    mediaLinks: [],
    youtubeLinks: [],
    image : p3
  }
];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BgVideoScroll />
      <div className="relative z-10"> {/* This wrapper ensures content stays above video */}
        <Navbar />
        <div className="container mx-auto px-4 py-16 space-y-24"></div>
        {projects.map((project, index) => (
          <div key={index} className="space-y-12 p-[15px] md:p-[30px]">
            {/* Project Header at top */}
            <div className="text-center space-y-4 ">
              <span className={`px-3 py-1 text-sm rounded-full inline-block ${
                project.status === 'Completed' ? 'bg-[#FFD700]/20 text-[#FFD700]' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {project.status}
              </span>
              <h2 className="text-3xl md:text-4xl font-audioWide font-bold text-blue-300">
                {project.title}
              </h2>
            </div>

            {/* Video and Description in parallel */}
            <motion.div 
            initial={{ opacity: 0, x: -100,  filter: "blur(20px)" }}
            whileInView={{ opacity: 1, x: 0,  filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="shadow-[rgb(96, 165, 250)] hover:bg-blue-400/20 hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-300 cursor-pointer grid md:grid-cols-2 gap-8 items-start p-[10px] bg-black/30 rounded-lg overflow-hidden border border-blue-400/30 mx-4">
              {/* Video Section */}
              {project.image && (
                <div style={{ filter: "drop-shadow(6px 6px 1.75rem #FFFFFF)" }} className="relative w-full aspect-video rounded-lg overflow-hidden my-2 mx-1">
                    <img src={project.image} height={"550px"} width={"600px"} alt="" className=' object-cover' />
                </div>
              )}
              
              {/* Description Section */}
              <div className="space-y-4 h-full md:w-[90%] flex items-center justify-center italic">
                <p className="text-gray-300 leading-relaxed text-[16px] md:text-[20px] text-center">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Coverage Section - Media and YouTube side by side */}
            {(project.mediaLinks.length > 0 || project.youtubeLinks.length > 0) && (
              <div className="grid md:grid-cols-2 p-[20px] gap-8 ">
                {/* Media Coverage */}
                {project.mediaLinks.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-blue-300 font-audioWide">Media Coverage</h3>
                    <div className="space-y-6">
                      {project.mediaLinks.map((item, idx) => (
                        <motion.div
                        initial={{opacity: 0, x: -100, filter: "blur(20px)"}}
                        whileInView={{opacity:1, x:0, filter: "blur(0px)"}}
                        duration={{duration: 0.3}}
                        whileHover={{scale: 1.02}}
                        key={idx} className="bg-black/30 hover:bg-blue-400/20 rounded-lg cursor-pointer overflow-hidden border hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-300 border-blue-400/30">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover" 
                          />
                          <div className="p-6">
                            <h4 className="text-blue-300 font-medium text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-300 text-sm">{item.source}</p>
                            <p className="text-gray-400 text-sm mb-4">{item.date}</p>
                            <a 
                              href={item.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-400 inline-flex items-center gap-2"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* YouTube Videos */}
                {project.youtubeLinks.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-blue-300 font-audioWide">Video Coverage</h3>
                    <div className="space-y-6">
                      {project.youtubeLinks.map((video, idx) => (
                        <motion.div 
                        initial={{opacity: 0, x: 100, filter: "blur(20px)"}}
                        whileInView={{opacity:1, x:0, filter: "blur(0px)"}}
                        duration={{duration: 0.3}}
                        whileHover={{scale: 1.02}}
                        key={idx} className="bg-black/30 hover:bg-blue-400/20 p-6 cursor-pointer rounded-lg border hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-300 border-blue-400/30">
                          <div className="flex items-center gap-4">
                            <Youtube className="w-8 h-8 text-red-500" />
                            <div>
                              <h4 className="text-blue-300 font-medium text-lg mb-2">{video.title}</h4>
                              <a 
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:text-blue-400 inline-flex items-center gap-2"
                              >
                                Watch Video
                                <ChevronRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlider;