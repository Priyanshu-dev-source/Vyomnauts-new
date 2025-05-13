import Navbar from "./Navbar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";


// const Success = () => {
//   return (
//     <>
//       <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-30 z-30 flex items-center justify-center">
//       </div>
//       <div className="absolute animate-boxPopUp cursor-pointer shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-200 top-[230px] left-[470px] border-2 border-blue-500 bg-clip-padding p-6 z-40 h-[300px] w-[600px] rounded-[20px] bg-blue-500 bg-opacity-20 flex items-center justify-between flex-col">
//         <h1 className="font-audioWide text-[29px] text-blue-500">THANKS FOR DOWNLOADING</h1>
//         <svg
//       className="relative w-44 h-44 animate-bounce top-[10px]"
//       viewBox="0 0 100 100"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Outer Circle */}
//       <circle
//         cx="50"
//         cy="50"
//         r="40"
//         className="stroke-cyan-400 stroke-[3.84] fill-none"
//       />

//       {/* Check Mark */}
//       <path
//         className="fill-blue-600"
//         d="M73.3 33.5c-2.3-2.3-6.1-2.3-8.4 0L44.5 53.9l-9.4-9.4c-2.3-2.3-6.1-2.3-8.4 0-1.1 1.1-1.7 2.6-1.7 4.2s.6 3.1 1.7 4.2l13.6 13.6c1.1 1.1 2.6 1.7 4.2 1.7s3.1-.6 4.2-1.7L73.2 42c1.1-1.1 1.7-2.6 1.7-4.2s-.5-3.1-1.6-4.3z"
//       />
//     </svg>
//       </div>
//     </>
//   );
// };


const Emagazine = () => {
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [headUpAnimate, setHeadUpAnimate] = useState(false);
  const [headDownAnimate, setHeadDownAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const GaganSeriesMagazine = [
    {
      id: 1,
      title: "Gagan Vol 1",
      descp: "Hello, this is the first edition.",
      image: "/assets/gagan1.png",
      pdfLink: "GaganVol1.pdf",
      pdfName: "Gagan Vol 1"
    },
    {
      id: 2,
      title: "Gagan Vol 2",
      descp: "Hello, this is the second edition.",
      image: "/assets/gagan2.png",
      pdfLink: "GaganVol2.pdf",
      pdfName: "Gagan Vol 2"
    },
    {
      id: 3,
      title: "Gagan Vol 3",
      descp: "Hello, this is the third edition.",
      image: "/assets/gagan3.png",
      pdfLink: "GaganVol3.pdf",
      pdfName: "Gagan Vol 3"   
    },
    {
      id: 4,
      title: "Gagan Vol 4",
      descp: "Hello, this is the fourth edition.",
      image: "/assets/gagan4.png",
      pdfLink: "GaganVol4.pdf",
      pdfName: "Gagan Vol 4" 
    },
    {
      id: 5,
      title: "Gagan Vol 5",
      descp: "Hello, this is the fourth edition.",
      image: "/assets/gagan5.png",
      pdfLink: "GaganVol5.pdf",
      pdfName: "Gagan Vol 5" 
    },
    {
      id: 6,
      title: "Gagan Vol 6",
      descp: "Hello, this is the fourth edition.",
      image: "/assets/gagan6.png",
      pdfLink: "GaganVol6.pdf",
      pdfName: "Gagan Vol 5" 
    },
  ];

  const downloadPDF = () => {


    const pdfUrl = `${window.location.origin}/${GaganSeriesMagazine[currentIndex].pdfLink}`;
    
    if (!pdfUrl) {
      alert("No PDF available for this edition.");
      return;
    }
  
    const link = document.createElement("a");
    link.href = pdfUrl
    link.download = GaganSeriesMagazine[currentIndex].pdfName + ".pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      
    }, 2000);
  };
  
  const moveLeftCard = () => {
    if (currentIndex > 0) {
      setLeftAnimate(true);
      setHeadDownAnimate(true);
      // moveHeadDownAnimate();
      setTimeout(() => {
        setLeftAnimate(false);
        setHeadDownAnimate(false);
        setCurrentIndex((prev) => prev - 1);
      }, 500);
    }
  };

  const moveRightCard = () => {
    if (currentIndex < GaganSeriesMagazine.length - 1) {
      setRightAnimate(true);
      setHeadUpAnimate(true);
      // moveHeadUpAnimate()
      setTimeout(() => {
        setRightAnimate(false);
        setHeadUpAnimate(false);
        setCurrentIndex((prev) => prev + 1);
      }, 500);
    }
  };

  return (
    <>
    <div className="min-h-screen w-full text-white bg-black overflow-hidden">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-400/20">
        <Navbar />
      </header>
      <main className="h-screen w-full flex items-center justify-center flex-col">
        {/* <Success/> */}
        <div
          className={`absolute ml-[30px] md:ml-[50px] md:h-[60px] h-[40px] w-full md:border-l-8 border-l-2 border-blue-400 mt-[-580px] md:mt-[-520px] flex justify-start items-center`}
        >
          <h2
            className={`transform md:translate-x-[5px] transition-all font-audioWide pl-[15px] md:text-4xl text-2xl font-extrabold text-blue-400 ${
              headUpAnimate ? "animate-moveHeadUp" : ""
            } ${headDownAnimate ? "animate-moveHeadDown" : ""} `}
          >
            {GaganSeriesMagazine[currentIndex].title}
          </h2>
        </div>
        <div className="absolute top-[80px] flex md:justify-center justify-between md:gap-[200px] items-center h-[86dvh] w-full pt-[40px]">
          <div
            onClick={moveLeftCard}
            className="h-[40px] w-[40px] md:h-[80px] md:w-[80px] shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] flex items-center justify-center hover:bg-blue-400/20 transition-all duration-200 cursor-pointer rounded-[20px]"
          >
            <ChevronLeft className="h-8 w-8 md:h-16 md:w-16" />
          </div>

          <div
            className={`h-[450px] md:h-[550px] w-[290px] md:w-[400px] hover:translate-y-[-10px] rounded-[20px] transform transition-all duration-200 shadow-[rgb(96, 165, 250)] hover:scale(1.8) md:shadow-[0_0_30px_rgba(96,165,250,2.25)] shadow-[0_0_20px_rgba(96,165,250,2.25)] cursor-pointer flex flex-col items-center justify-between text-center p-4 ${
              leftAnimate ? "animate-moveLeft" : ""
            } ${rightAnimate ? "animate-moveRight" : ""}`}
          >
            <img className="h-[87%]  w-full rounded-[12px] transition-all duration-200" src={`${GaganSeriesMagazine[currentIndex].image}`} alt="" />
            <button onClick={downloadPDF} className="h-10 w-44 rounded-[40px] text-[18px] transition-all duration-200 border-[2px] hover:text-white text-blue-400 border-blue-400 hover:h-[40px] hover:bg-blue-400/30 font-audioWide hover:w-[190px] md:hover:w-[210px]">
              DOWNLOAD
            </button>
          </div>

          <div
            onClick={moveRightCard}
            className="md:h-[80px] md:w-[80px] h-[40px] w-[40px] shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] rounded-[20px] flex items-center justify-center hover:bg-blue-400/20 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight
              style={{ filter: "drop-shadow(10px 10px 7.75rem #C1440E)" }}
              className="h-8 w-8 md:h-16 md:w-16"
            />
          </div>
        </div>
      </main>
    </div>
  </>
  );
};

export default Emagazine;
