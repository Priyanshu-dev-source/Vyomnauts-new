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
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          // transition={{ duration: 0.3 }}
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
            className="text-[20px] text-yellow-300 sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] tracking-wide font-extralight text-center font-audioWide"
            style={{ lineHeight: "45px" }}
          >
            PSIT Vyomnauts Club is a hub for space enthusiasts, fostering
            innovation in aerospace, defense, robotics, and space science
            education through hands-on projects, research, and national and
            international competitions.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8 w-full bg-black">
        <div className="relative top-[40px] left-[20px]">
          <h2 className="text-6xl font-bold text-purple-500 flex justify-center items-center gap-3">
            <Rocket className="w-14 h-14" />
            Our Domains
          </h2>
        </div>

        {/*Planets Section*/}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="absolute h-[400px] w-[350px] rounded-[20px] top-[79em] left-[1030px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #C1440E)" }}
            src="/assets/marsPlanetsBg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="absolute h-[550px] w-[480px] rounded-[20px] top-[109em] left-[230px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #D4AF37)" }}
            src="/assets/saturnBg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="absolute h-[550px] w-[480px] rounded-[20px] top-[135em] left-[990px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 7.75rem #D9A066)" }}
            src="/assets/jupiter.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(30px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="absolute h-[610px] w-[520px] rounded-[20px] top-[169em] left-[180px] "
        >
          <img
            style={{ filter: "drop-shadow(6px 6px 5.75rem #2D68C4)" }}
            src="/assets/neptune.png"
            alt=""
          />
        </motion.div>

        {/*Cards Section*/}
        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(30px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute h-[410px] w-[310px] bg-[rgba(208,87,255,0.1)] cursor-pointer hover:bg-transparent rounded-[20px] top-[80em] left-[230px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Rocket className="w-20 h-20" />
          </div>
          <h3 className="text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-5">
            Aerospace
          </h3>
          <p className="text-white text-center w-[220px]">
            Rockets, CubeSats, UAVs, and propulsion systems.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0, filter: "blur(30px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute h-[410px] w-[310px] bg-[rgba(208,87,255,0.1)] hover:bg-transparent rounded-[20px] top-[108em] left-[1045px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Shield className="w-20 h-20" />
          </div>
          <h3 className="text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-5">
            Defense
          </h3>
          <p className="text-white text-center w-[220px]">
            Surveillance, navigation, and advanced strategic technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(30px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute h-[410px] w-[310px] hover:bg-transparent bg-[rgba(208,87,255,0.1)] rounded-[20px] top-[135em] left-[230px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Cpu className="w-20 h-20" />
          </div>
          <h3 className="text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-5">
            Robotics
          </h3>
          <p className="text-white text-center w-[220px]">
            AI-driven drones, autonomous systems, and industrial robotics.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0, filter: "blur(30px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute cursor-pointer hover:bg-transparent h-[410px] w-[310px] bg-[rgba(208,87,255,0.1)] rounded-[20px] top-[166em] left-[1045px] border-[2px] border-purple-500 flex items-center justify-start flex-col gap-[15px] pt-[20px] "
        >
          <div className="text-purple-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Radio className="w-20 h-20" />
          </div>
          <h3 className="text-[30px] font-audioWide text-center font-semibold text-purple-500 mb-5">
            Space Science & Education
          </h3>
          <p className="text-white text-center w-[220px]">
            Workshops, research, and awareness programs.
          </p>
        </motion.div>
        <div
          ref={firstRef}
          className="relative z-[5] top-[30px] left-[40px] w-full h-[1800px] text-center overflow-hidden"
        >
          <motion.svg
            className="relative left-[300px]"
            width="903"
            height="1500"
            viewBox="0 0 903 2675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M449.5 0V572M449.5 572H0.5M449.5 572V1233.5M449.5 1233.5H903M449.5 1233.5V1937.5M449.5 1937.5H0.5M449.5 1937.5V2670H903"
              stroke="#994ED7"
              strokeWidth="3"
              strokeDasharray="3000"
              strokeDashoffset={inView ? "0" : "3000"}
              initial={{ strokeDashoffset: 3000 }}
              animate={{ strokeDashoffset: inView ? 0 : 3000 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/*Why Choose Us */}
        <div className="relative top-[140px] left-[20px]">
          <h2 className="text-6xl font-bold text-green-500 flex justify-center items-center gap-3">
            <Star className="w-14 h-14 " />
            Why Choose Us?
          </h2>
        </div>
      </div>
      <div
        ref={secondRef}
        className="relative z-[5] top-[30px] left-[40px] w-full h-[800px] text-center overflow-hidden"
      >
        <motion.svg
          className="relative left-[180px]"
          width="1650"
          height="650"
          viewBox="0 0 6201 1238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
             d="M2068 0V449.5M2068 449.5H1043.5M2068 449.5V906.5M2068 449.5H3100.5M3.5 906.5V449.5H1043.5M1043.5 449.5V906.5M3100.5 449.5V906.5M3100.5 449.5H4046V906.5"
            stroke="#21FFAA"
            strokeWidth="3"
            strokeDasharray="3000"
            strokeDashoffset={chooseView ? "0" : "3000"}
            initial={{ strokeDashoffset: 3000 }}
            animate={{ strokeDashoffset: chooseView ? 0 : 3000 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
        <div className="flex items-center justify-center gap-[30px] absolute left-[50px] bottom-[100px] h-[300px] w-[1370px]">


          <motion.div
            initial={{ y: -300, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            style={{ filter: "drop-shadow(6px 6px 7.75rem #C1440E)" }}
            className="relative hover:bg-transparent  transition duration-300 cursor-pointer h-full w-[230px] right-[30px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] pt-[20px] "
            >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Rocket className="w-20 h-20" />
            </div>
            <p className="text-[15px] font-audioWide text-center font-semibold text-white w-[150px]">
            Hands-on experience in real-world space and defense projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-full w-[230px] right-[20px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] pt-[20px] "
            >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Star className="w-20 h-20" />
            </div>
            <p className="text-[15px] font-audioWide text-center font-semibold text-white w-[150px]">
            Opportunities to participate in top competitions.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-full w-[230px] right-[10px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] pt-[20px] "
            >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Cpu className="w-20 h-20" />
            </div>
            <p className="text-[15px] font-audioWide text-center font-semibold text-white w-[150px]">
            Strong focus on innovation and research.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0, filter: "blur(30px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative hover:bg-transparent transition duration-300 cursor-pointer h-full w-[230px] left-[5px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] pt-[20px] "
            >
            <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[40%] group-hover/item:scale-110 transition-transform duration-300">
            <Shield className="w-20 h-20" />
            </div>
            <p className="text-[15px] font-audioWide text-center font-semibold text-white w-[150px]">
            Contribution to India's space ecosystem.
            </p>
          </motion.div>

            <motion.div
              initial={{ y: -300, opacity: 0, filter: "blur(30px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="relative hover:bg-transparent transition duration-300 cursor-pointer h-full w-[230px] left-[10px] bg-[rgba(96,255,96,0.1)] rounded-[20px] border-[2px] border-green-500 flex items-center justify-start flex-col gap-[35px] pt-[20px] "
            >
              <div className="text-green-500 w-full flex bg-transparent items-center justify-center h-[40%] transition-transform duration-300">
              <Users className="w-20 h-20" />
              </div>
              <p className="text-[15px] font-audioWide text-center font-semibold text-white w-[150px]">
                Mentorship from industry experts and academicians.
              </p>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default VerticalSpaceCards;
