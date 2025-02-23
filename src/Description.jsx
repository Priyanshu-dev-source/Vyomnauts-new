import { motion } from "framer-motion";
// import { useRef} from "react";
import { useInView } from "react-intersection-observer";
import { Rocket, Shield, Cpu, Radio, Users, Star } from "lucide-react";

const VerticalSpaceCards = () => {
  const { ref: firstRef, inView } = useInView({
    threshold: 0.2,
  });

  const { ref: secondRef, inView: chooseView } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center min-h-[800px] md:min-h-[700px] lg:min-h-[800px] bg-[url('/assets/halfEarth.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-white text-center md:min-h-[850px] min-h-[900px] lg:min-h-[1000px] flex items-center justify-center flex-col pb-[250px]"
        >
          <h1 className="flex tracking-wide items-center justify-center sm:gap-2 md:gap-6 text-3xl sm:text-[42px] md:text-[48px] lg:text-[55px] xl:text-[75px] font-audioWide text-yellow-300">
            Welcome to
            <img
              className="relative bottom-[10px] sm:bottom-[20px] sm:left-[-4px] left-[10px] mb-[30px] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] h-auto"
              src="/assets/logoo.png"
              alt="Not found"
            />
          </h1>
          <h1 className="text-3xl sm:text-[42px] md:text-[48px] lg:text-[55px] xl:text-[75px] font-audioWide text-yellow-300">
            Vyomnauts
          </h1>
        </motion.div>
        <div className="max-w-[90%] h-[150px] md:max-w-[900px] relative z-10 bottom-[450px] md:bottom-[350px] lg:bottom-[280px] mx-auto">
          <p
            className="text-[16px] md:pt-0 pt-[200px] text-yellow-300 sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] tracking-wide font-extralight text-center font-audioWide"
            style={{ lineHeight: window.innerWidth < 640 ? "35px" : "45px" }}
          >
            PSIT Vyomnauts Club is a hub for space enthusiasts, fostering
            innovation in aerospace, defense, robotics, and space science
            education through hands-on projects, research, and national and
            international competitions.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8 w-full bg-black">
        <div className="relative top-[40px] left-[5px] md:left-[20px]">
          <h2 className="text-[40px] md:text-6xl font-bold text-purple-500 flex justify-center items-center gap-2 md:gap-3">
            <Rocket className="pt-[8px] md:pt-0 h-12 w-10 md:w-14 md:h-14" />
            Our Domains
          </h2>
        </div>

        {/*Planets Section*/}
        <motion.div
          initial={{ x: window.innerWidth < 640 ? 30 : 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="absolute md:h-[400px] md:w-[350px] rounded-[20px] top-[73em] left-[230px] md:top-[79em] md:left-[1030px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #C1440E)" }}
            src="/assets/marsPlanetsBg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: window.innerWidth < 640 ? -30 : -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="absolute h-[200px] w-[200px] md:h-[550px] md:w-[480px] rounded-[20px] top-[87em] left-[5px] md:top-[109em] md:left-[230px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #D4AF37)" }}
            src="/assets/saturnBg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: window.innerWidth < 640 ? 30 : 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="absolute h-[250px] w-[250px] md:h-[550px] md:w-[480px] rounded-[20px] top-[98em] left-[200px] md:top-[135em] md:left-[990px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #D9A066)" }}
            src="/assets/jupiter.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{
            x: window.innerWidth < 640 ? -30 : -300,
            opacity: 0,
            filter: "blur(30px)",
          }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="absolute h-[320px] w-[320px] md:h-[670px] md:w-[580px] rounded-[20px] top-[117em] left-[-60px] md:top-[169em] md:left-[80px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 5.75rem #2D68C4)" }}
            src="/assets/neptune.png"
            alt=""
          />
        </motion.div>

        {/*Cards Section*/}
        <motion.div
          initial={{
            x: window.innerWidth < 640 ? -30 : -300,
            opacity: 0,
            filter: "blur(30px)",
          }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute z-[8] h-[220px] w-[160px] md:h-[410px] md:w-[310px] bg-[rgba(208,87,255,0.1)] cursor-pointer hover:bg-transparent rounded-[20px] top-[74em] left-[20px] md:top-[82em] md:left-[230px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[8px] md:gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[25%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Rocket className="h-10 w-10 md:w-20 md:h-20" />
          </div>
          <h3 className="text-[18px] md:text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-3 md:mb-5">
            Aerospace
          </h3>
          <p className="text-white text-[15px] text-center w-[150px] md:w-[220px]">
            Rockets, CubeSats, UAVs, and propulsion systems.
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: window.innerWidth < 640 ? 30 : 300,
            opacity: 0,
            filter: "blur(30px)",
          }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute md:z-[20] z-[10] h-[220px] w-[160px] md:h-[410px] md:w-[310px] bg-[rgba(208,87,255,0.1)] cursor-pointer hover:bg-transparent rounded-[20px] top-[86em] left-[240px] md:top-[108em] md:left-[1045px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[8px] md:gap-[15px] pt-[20px]"
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[25%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Shield className="h-10 w-10 md:w-20 md:h-20" />
          </div>
          <h3 className="text-[18px] md:text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-1 md:mb-5">
            Defense
          </h3>
          <p className="text-white text-[15px] text-center w-[150px] md:w-[220px]">
            Surveillance, navigation, and advanced strategic technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: window.innerWidth < 640 ? -30 : -300,
            opacity: 0,
            filter: "blur(30px)",
          }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute md:z-[20] z-[10] h-[220px] w-[160px] md:h-[410px] md:w-[310px] bg-[rgba(208,87,255,0.1)] cursor-pointer hover:bg-transparent rounded-[20px] top-[101em] left-[20px] md:top-[135em] md:left-[230px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[8px] md:gap-[15px] pt-[20px]"
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[25%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Cpu className="h-10 w-10 md:w-20 md:h-20" />
          </div>
          <h3 className="text-[18px] md:text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-1 md:mb-5">
            Robotics
          </h3>
          <p className="text-white text-[15px] text-center w-[150px] md:w-[220px]">
            AI-driven drones, autonomous systems, and industrial robotics.
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: window.innerWidth < 640 ? 30 : 300,
            opacity: 0,
            filter: "blur(30px)",
          }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute md:z-[20] z-[10] h-[220px] w-[160px] md:h-[410px] md:w-[310px] bg-[rgba(208,87,255,0.1)] cursor-pointer hover:bg-transparent rounded-[20px] top-[113em] left-[240px] md:top-[166em] md:left-[1045px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[8px] md:gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[25%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Radio className="h-10 w-10 md:w-20 md:h-20" />
          </div>
          <h3 className="text-[18px] md:text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-1 md:mb-5">
            Space Science & Education
          </h3>
          <p className="text-white text-[15px] text-center w-[150px] md:w-[220px]">
            Workshops, research, and awareness programs.
          </p>
        </motion.div>
        <div
          ref={firstRef}
          className="relative z-[5] top-[30px] left-[40px] w-full h-[800px] md:h-[1800px] text-center overflow-hidden"
        >
          <motion.svg
            className="relative md:left-[300px] md:w-[903px] md:h-[1500px] left-[-58px] w-[456px] h-[670px]"
            width="903"
            height="1500"
            viewBox="0 0 903 2675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="z-[3]"
              d={window.innerWidth < 640 
                ? "M449.5 0V572 M449.5 572H330 M449.5 572V1233.5 M449.5 1233.5H570 M449.5 1233.5V1937.5 M449.5 1937.5H330 M449.5 1937.5V2670H570" 
                : "M449.5 0V572M449.5 572H0.5M449.5 572V1233.5M449.5 1233.5H903M449.5 1233.5V1937.5M449.5 1937.5H0.5M449.5 1937.5V2670H903"
              }
              stroke="#994ED7"
              strokeWidth={window.innerWidth < 640 ? "7" : "3"}
              strokeDasharray="3000"
              strokeDashoffset={inView ? "0" : "3000"}
              initial={{ strokeDashoffset: 3000 }}
              animate={{ strokeDashoffset: inView ? 0 : 3000 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/*Why Choose Us */}
        <div className="relative top-[140px] left-[5px] md:left-[20px]">
          <h2 className="text-[40px] md:text-6xl font-bold text-green-500 flex justify-center items-center gap-2 md:gap-3">
            <Star className="pt-[8px] md:pt-0 h-12 w-10 md:w-14 md:h-14" />
            Why Choose Us?
          </h2>
        </div>
      </div>
      <div
        ref={secondRef}
        className="relative z-[5] top-[30px] left-[40px] w-full h-[900px] md:h-[800px] text-center overflow-hidden"
      >
        
        <motion.svg
          className="relative none md:flex md:w-[1650px] md:h-[650px] h-[450px] w-[400px] left-[-300px] md:left-[180px]"
          // style={{ display:window.innerWidth < 720 ? "none" : "flex" }}
          width="1650"
          height="650"
          viewBox="0 0 6201 1238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2068 0V449.5M2068 449.5H1043.5M2068 449.5V906.5M2068 449.5H3100.5M3.5 906.5V449.5H1043.5M1043.5 449.5V906.5M3100.5 449.5V906.5M3100.5 449.5H4046V906.5"
            stroke="#21FFAA"
            strokeWidth={window.innerWidth < 640 ? "10" : "3"}
            strokeDasharray="3000"
            strokeDashoffset={chooseView ? "0" : "3000"}
            initial={{ strokeDashoffset: 3000 }}
            animate={{ strokeDashoffset: chooseView ? 0 : 3000 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
        <div className="md:flex grid grid-rows-2 md:flex-row flex-col md:items-center md:justify-center md:gap-[30px] w-[345px] h-[700px] md:absolute md:left-[50px] md:bottom-[100px] md:h-[300px] md:w-[1370px]">
          <motion.div
            initial={{ y: 110, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            style={{ filter: "drop-shadow(6px 6px 7.75rem #C1440E)" }}
            className="relative hover:bg-transparent  transition duration-300 cursor-pointer h-[210px] w-[155px] md:h-full bottom-[20px] md:bottom-0 md:w-[230px] md:right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[20px] md:gap-[35px] pt-[30px] md:pt-[20px]"
          >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[20%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
              <Rocket className="h-16 w-12 md:w-20 md:h-20" />
            </div>
            <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
              Hands-on experience in real-world space and defense projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 110, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-[210px] bottom-[55px] md:bottom-0 w-[155px] md:h-full md:w-[230px] left-[190px] md:left-0 md:right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] md:gap-[35px] pt-[30px] md:pt-[20px]"
          >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[20%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
              <Star className="h-16 w-12 md:w-20 md:h-20" />
            </div>
            <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
              Opportunities to participate in top competitions.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 110, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-[210px] bottom-[340px] md:bottom-0 w-[155px] md:h-full md:w-[230px] left-[190px] md:left-0 md:right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] md:gap-[35px] pt-[30px] md:pt-[20px]"
          >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[20%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
              <Cpu className="h-16 w-12 md:w-20 md:h-20" />
            </div>
            <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
              Strong focus on innovation and research.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 110, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-[210px] bottom-[550px] md:bottom-0 w-[155px] md:h-full md:w-[230px] left-[1px] md:left-0 md:right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] md:gap-[35px] pt-[30px] md:pt-[20px]"
          >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[20%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
              <Shield className="h-16 w-12 md:w-20 md:h-20" />
            </div>
            <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
              Contribution to India space ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 110, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-[210px] bottom-[260px] md:bottom-0 w-[155px] md:h-full md:w-[230px] left-[89px] md:left-0 md:right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] md:gap-[35px] pt-[30px] md:pt-[20px] "
          >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[20%] md:h-[40%] group-hover/item:scale-110 transition-transform duration-300">
              <Users className="h-16 w-12 md:w-20 md:h-20" />
            </div>
            <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
              Mentorship from industry experts and academicians.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VerticalSpaceCards;
