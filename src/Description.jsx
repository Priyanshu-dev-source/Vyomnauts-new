import React from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Cpu, Radio, Users, Star } from "lucide-react";

const VerticalSpaceCards = () => {
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
            className="text-[20px] sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] tracking-wide font-extralight italic text-center font-calibri"
            style={{ lineHeight: "45px" }}
          >
            PSIT Vyomnauts Club is a hub for space enthusiasts, fostering
            innovation in aerospace, defense, robotics, and space science
            education through hands-on projects, research, and national and
            international competitions.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 w-full">
        <div className="lg:col-span-2 w-[90vw] group flex flex-col gap-20">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }} // Starts below with blur
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Moves up, fades in, removes blur
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-full bg-gradient-to-t from-blue-900/30 to-slate-400/10 border-2 border-yellow-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:border-yellow-500"
          >
            <div className="relative">
              <h2 className="text-3xl font-bold text-amber-500 mb-8 flex justify-center items-center gap-3">
                <Rocket className="w-8 h-8" />
                Our Domains
              </h2>
              <div className="grid  grid-cols-1 sm:grid-cols-2 place-content-center place-items-center xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Rocket className="w-20 h-20" />,
                    title: "Aerospace",
                    desc: "Rockets, CubeSats, UAVs, and propulsion systems.",
                  },
                  {
                    icon: <Shield className="w-20 h-20" />,
                    title: "Defense",
                    desc: "Surveillance, navigation, and advanced strategic technologies.",
                  },
                  {
                    icon: <Cpu className="w-20 h-20" />,
                    title: "Robotics",
                    desc: "AI-driven drones, autonomous systems, and industrial robotics.",
                  },
                  {
                    icon: <Radio className="w-20 h-20" />,
                    title: "Space Science & Education",
                    desc: "Workshops, research, and awareness programs.",
                  },
                ].map((domain, i) => (
                  <div
                    key={i}
                    className="group/item h-[350px] w-[300px] hover:bg-yellow-500/10 p-4  rounded-xl transition-all duration-300"
                  >
                    <div className="text-blue-600 w-full flex items-center justify-center h-[50%] mb-3 group-hover/item:scale-110 transition-transform duration-300">
                      {domain.icon}
                    </div>
                    <h3 className="text-xl text-center font-semibold text-blue-400 mb-5">
                      {domain.title}
                    </h3>
                    <p className="text-white/70 text-center">{domain.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }} // Starts below with blur
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Moves up, fades in, removes blur
            transition={{ duration: 0.3, delay: 0.2 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-t from-blue-900/30 to-slate-400/10 border-2 border-yellow-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:border-yellow-500">
              <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center justify-center flex items-center gap-3">
                <Star className="w-8 h-8 " />
                Why Choose Us?
              </h2>
              <ul className="gap-4 items-center justify-center flex flex-wrap">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    text: "Mentorship from industry experts and academicians.",
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    text: "Hands-on experience in real-world space and defense projects.",
                  },
                  {
                    icon: <Star className="w-6 h-6" />,
                    text: "Opportunities to participate in top competitions.",
                  },
                  {
                    icon: <Cpu className="w-6 h-6" />,
                    text: "Strong focus on innovation and research.",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    text: "Contribution to India's space ecosystem.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex h-12 w-full xl:w-[35%] gap-4 group/item hover:bg-yellow-500/10 items-center py-10 px-4 rounded-xl transition-all duration-300"
                  >
                    <span className="text-blue-600 group-hover/item:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VerticalSpaceCards;
