import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Book, Globe } from 'lucide-react';
import img2 from "./assets/Team/manish.jpg"
import img3 from "./assets/Team/raghavendra.jpg"
import img4 from "./assets/Team/sandeep.jpg"
import img5 from "./assets/Team/GroupDirector.png"
import img6 from "./assets/Team/Raghuraj.png"

const VerticalMentorsList = () => {
  const mentors = [
    {
      id: 1,
      name: "Dr. Manmohan Shukla",
      title: "Group Director",
      expertise: "Astrophysics & Space Exploration",
      background: "Dr. Manmohan Shukla, the Group Director at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. With expertise in AI/ML projects and cutting-edge research, he has been instrumental in guiding students through various national and international competitions in technology and innovation. Under his mentorship, students have successfully engaged in groundbreaking projects, enhancing their technical knowledge and problem-solving skills.",
      achievements: [
        "1. Pioneering Research in Electronics and Communication",
        "2. Shaping Academic Excellence",
        "3. Guiding Space and Technology Initiatives",
        "4. Commitment to Innovation",
        "5. Fostering a Research-Oriented Environment"
      ],
      image: `${img5}`,
      researchFocus: [
        "Advanced wireless communication",
        "Electromagnetic wave propagation",
        "Antenna design"
      ]
    },
    {
      id: 2,
      name: "Dr. Raghuraj Singh Suryavanshi",
      title: "Dean PSIT-SIF",
      expertise: "Astrophysics & Space Exploration",
      background: "Dr. Raghuraj Singh Suryavanshi, the Dean of PSIT-SIF at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. A seasoned expert in AI/ML applications and technological advancements, he has been instrumental in guiding students through various national and international competitions in technology and innovation. Under his mentorship, students have successfully engaged in groundbreaking projects, enhancing their technical knowledge and problem-solving skills.",
      achievements: [
        "1. Pioneering Research in Electronics and Communication",
        "2. Shaping Academic Excellence",
        "3. Guiding Space and Technology Initiatives",
        "4. Commitment to Innovation",
        "5. Fostering a Research-Oriented Environment"
      ],
      image: `${img6}`,
      researchFocus: [
        "Advanced wireless communication",
        "Electromagnetic wave propagation",
        "Antenna design"
      ]
    },
    {
      id: 3,
      name: "Dr. Raghvendra Singh",
      title: "Director Academics",
      expertise: "Astrophysics & Space Exploration",
      background: "Dr. Raghvendra Singh, the Director of Academics at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. With expertise in communication and antenna technology, he has been instrumental in guiding students through various national and international competitions in space and robotics. Under his mentorship, students have successfully engaged in innovative projects, advancing their technical knowledge and problem-solving skills.",
      achievements: [
        "1. Pioneering Research in Electronics and Communication",
        "2. Shaping Academic Excellence",
        "3. Guiding Space and Technology Initiatives",
        "4. Commitment to Innovation",
        "5. Fostering a Research-Oriented Environment"
      ],
      image: `${img3}`,
      researchFocus: [
        "Advanced wireless communication",
        "Electromagnetic wave propagation",
        "Antenna design"
      ]
    },
    {
      id: 4,
      name: "Dr Manish Kumar",
      title: "Club Ambassador",
      expertise: "Quantum Computing & Artificial Intelligence",
      background: "Dr. Manish Kumar is a Professor in the Electronics and Communication Engineering (ECE) Department at Pranveer Singh Institute of Technology (PSIT). He holds specialization in Guided Missile Technology from IISc Bangalore, bringing deep technical insights into aerospace and defense systems.As the ambassador of our club, he serves as an inspiration for students, fostering a research-driven mindset and guiding them in space, robotics, and defense technology projects ",
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
"MATLAB Applications – Developing simulations and models for engineering and research"

      ]
    },
    {
      id: 5,
      name: "Sandeep Kumar Khare",
      title: "Club Ambassador",
      expertise: "Extraterrestrial Life & Planetary Sciences",
      background: "Sandeep Sir is a guiding force to our space journey, bringing in unmatched energy and dedication to each project. They inspire us, being our torchbearer, and motivate us to reach new heights by pushing boundaries of innovation and excellence. His commitment and enthusiasm guide us through every challenge as he motivates us to greatness in the space exploration field. Their mentorship is truly the cornerstone of our success. ",
      achievements: [
        "Leadership in Space Projects",  
        "Inspiring Innovation in Aerospace",  
        "Key Role in National Space Competitions",
        "Partners with leading Institutions",
        "Mentorship in Space Education"
      ],
      image: `${img4}`,
      researchFocus: [
        "Quantum physics", 
        "Satellite attitude and dynamics control",
        "Advanced Aerospace Systems",
        "Innovative Space Education & Mentorship"
        
      ]
    }
  ];

  return (
    <div className="bg-transparent backdrop-blur-sm py-8 rounded-xl ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="bg-zinc-800/50 border-[2px] border-blue-400/20 rounded-lg p-6 shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] hover:scale-105 transition-all duration-300 hover:border-blue-400"
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
                    <h2 className="text-2xl font-bold bg-blue-400 bg-clip-text text-transparent">
                      {mentor.name}
                    </h2>
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
                        {mentor.achievements.slice(0, 3).map((achievement, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMentorsList;
