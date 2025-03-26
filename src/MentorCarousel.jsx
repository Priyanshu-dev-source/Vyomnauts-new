import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Book, Globe, Linkedin, Twitter, Github,} from "lucide-react";
import { motion } from "framer-motion";
import img2 from "./assets/Team/manish.jpg";
import img3 from "./assets/Team/raghavendra.jpg";
import img4 from "./assets/Team/sandeep.jpg";
import img5 from "./assets/Team/GroupDirector.png";
import img6 from "./assets/Team/Raghuraj.png";
import img7 from "./assets/Team/AnuragDhawan.jpg";

const VerticalMentorsList = () => {

  const SocialIcon = ({ Icon, href }) =>
    href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-200 hover:text-yellow-400 transition-colors"
      >
        <Icon size={30} />
      </a>
    ) : null;

  const mentors = [
    {
      id: 1,
      name: "Dr. Manmohan Shukla",
      title: "Group Director",
      expertise: "Astrophysics & Space Exploration",
      background:
        "Dr. Manmohan Shukla, the Group Director at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. With expertise in AI/ML projects and cutting-edge research, he has been instrumental in guiding students through various national and international competitions in technology and innovation. Under his mentorship, students have successfully engaged in groundbreaking projects, enhancing their technical knowledge and problem-solving skills.",
      achievements: [
        "Presented influential international talks on AI/ML-powered skin cancer detection and diagnosis.",
        "Authored books published at both national and international levels.",
        "Published groundbreaking research papers and secured patents for a skin cancer detection platform.",
        "4. Cultivating an AI/ML-driven research ecosystem for innovation and advancement.",
      ],
      image: `${img5}`,
      researchFocus: [
        "Cutting-edge AI/ML initiatives",
        "Published research papers and patented innovations",
        "AI/ML-powered skin cancer detection and diagnostic solutions",
      ],
      links:[
        "https://www.psit.ac.in/institute/functionaries-details/2/Dr.-Man-Mohan-Shukla"
      ]
    },
    {
      id: 2,
      name: "Dr. Raghvendra Singh",
      title: "Director Academics",
      expertise: "Astrophysics & Space Exploration",
      background:
        "Dr. Raghvendra Singh, the Director of Academics at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. With expertise in communication and antenna technology, he has been instrumental in guiding students through various national and international competitions in space and robotics. Under his mentorship, students have successfully engaged in innovative projects, advancing their technical knowledge and problem-solving skills.",
      achievements: [
        "Pioneering Research in Electronics and Communication",
        "Shaping Academic Excellence",
        "Guiding Space and Technology Initiatives",
        "4. Commitment to Innovation",
        "5. Fostering a Research-Oriented Environment",
      ],
      image: `${img3}`,
      researchFocus: [
        "Advanced wireless communication",
        "Electromagnetic wave propagation",
        "Antenna design",
      ],
      links:[
        "https://www.linkedin.com/in/raghvendra-singh-3a137a72/"
      ]
    },
    {
      id: 4,
      name: "Dr. Raghuraj Singh Suryavanshi",
      title: "Dean PSIT-SIF",
      expertise: "Astrophysics & Space Exploration",
      background:
        "Dr. Raghuraj Singh Suryavanshi, the Dean of PSIT-SIF at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. A seasoned expert in AI/ML applications and technological advancements, he has been instrumental in guiding students through various national and international competitions in technology and innovation. Under his mentorship, students have successfully engaged in groundbreaking projects, enhancing their technical knowledge and problem-solving skills.",
      achievements: [
        " Delivered impactful international talks on AI/ML-driven skin cancer detection and diagnosis.",
        " Authored books published at international and national levels.",
        " Published research papers and secured patents for a skin cancer detection platform.",
        "4. Fostering a Research-Oriented on AI/ML driven Environment"
      ],
      image: `${img6}`,
      researchFocus: [
        "Advanced AI/ML projects",
        "Research papers and patents",
        "AI/ML-driven skin cancer detection and diagnosis",
      ],
      links:[
        "https://www.linkedin.com/in/raghuraj-suryavanshi-30914ba3/"
      ]
    },
    {
      id: 5,
      name: "Dr. Manish Kumar",
      title: "Club Ambassador",
      expertise: "Quantum Computing & Artificial Intelligence",
      background:
        "Dr. Manish Kumar is a Professor in the Electronics and Communication Engineering (ECE) Department at Pranveer Singh Institute of Technology (PSIT). He holds specialization in Guided Missile Technology from IISc Bangalore, bringing deep technical insights into aerospace and defense systems.As the club ambassador, he inspires students, fosters a research-driven mindset, and guides them in space, robotics, and defense technology projects. ",
      achievements: [
        "AI-Integrated Circuit Design",
        "Mentored Innovation in Space Technologies",
        "Industry Collaborations & Patents",
      ],
      image: `${img2}`,
      researchFocus: [
        "Guided Missile Technology – Specialization from IISc Bangalore, focusing on advanced defense systems.",
        "Navigation Systems – Expertise in precise tracking and positioning technologies.",
        "Internet of Things (IoT) – Working on smart and interconnected systems for automation.",
        "MATLAB Applications – Developing simulations and models for engineering and research",
      ],
      links:[
        "https://www.linkedin.com/in/manish-kumar-2368581a/"
      ]
    },
    {
      id: 3,
      name: "Mr. Anurag Dhawan",
      title: "CEO PSIT-SIF",
      expertise: "Astrophysics & Space Exploration",
      background:
        "Mr. Anurag Dhawan, CEO at PSIT-SIF and an industry expert for Vyomnauts Club, fosters investor connections, builds strategic relationships, and empowers students by guiding them through incubation, helping transform ideas into successful startups.",
      achievements: [
        "1. Mentored 150+ startups.",
        "2. Hosted conferences & conclaves.",
        "3. Built strong investor networks.",
        "4. Supported student incubation.",
        "5. Strengthened industry-academia ties.",
      ],
      image: `${img7}`,
      researchFocus: [
        "Startup incubation & acceleration",
        "Investor relations & fundraising",
        "Industry-academia collaboration",
        "Entrepreneurship development",
        "Building an innovation-driven ecosystem",
      ],
      links:[
        "https://www.linkedin.com/in/anurag-dhawan-7857b911",
      ]
    },
    {
      id: 6,
      name: "Sandeep Kumar Khare",
      title: "Club Ambassador",
      expertise: "Extraterrestrial Life & Planetary Sciences",
      background:
        "Sandeep Sir is a guiding force to our space journey, bringing in unmatched energy and dedication to each project. He inspires us as our torchbearer, motivating us to reach new heights by pushing the boundaries of innovation and excellence. His commitment and enthusiasm guide us through every challenge as he motivates us to greatness in the space exploration field. His mentorship is truly the cornerstone of our success. ",
      achievements: [
        "Leadership in Space Projects",
        "Inspiring Innovation in Aerospace",
        "Key Role in National Space Competitions",
        "Partners with leading Institutions",
        "Mentorship in Space Education",
      ],
      image: `${img4}`,
      researchFocus: [
        "Quantum physics",
        "Satellite attitude and dynamics control",
        "Advanced Aerospace Systems",
        "Innovative Space Education & Mentorship",
      ],
      links:[
        "https://www.linkedin.com/in/sandeep-kumar-khare-26993516b"
      ]
    },
  ];

  return (
    <div className="bg-transparent backdrop-blur-sm py-8 rounded-xl ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {mentors.map((mentor) => (
            <motion.div
              initial={{ opacity: 0, x: -200, filter: "blur(30px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={mentor.id}
              className="bg-zinc-800/50 border-[2px] border-blue-400/20 rounded-lg p-6 cursor-pointer shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-300 hover:border-blue-400"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Mentor Image */}
                <div className="sm:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-indigo-400/20 hover:border-yellow-400/30 transition-colors duration-300">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="sm:w-2/3 space-y-4">
                  <div>
                    <div className="flex items-center justify-between md:gap-2 gap-[30px]">
                      <h2 className="text-2xl font-bold bg-blue-400 bg-clip-text text-transparent">
                        {mentor.name}
                      </h2>
                      <div className="flex gap-4 mt-3">
                            <SocialIcon
                              Icon={Linkedin}
                              href={mentor.links}
                            />
                        </div>
                    </div>
                    <h3 className="text-lg text-indigo-300">{mentor.title}</h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {mentor.background}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                        <Award className="mr-2 text-indigo-400" size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        {mentor.achievements
                          .slice(0, 3)
                          .map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-blue-400">•</span>
                              {achievement}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                        <Book className="mr-2 text-indigo-400" size={16} />
                        Research Focus
                      </h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        {mentor.researchFocus.map((focus, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMentorsList;
