
import { useNavigate } from "react-router-dom";

const FlagShip = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative flex flex-col items-center  bg-black justify-start min-h-[75vh] w-full "
     
    >
      {/* Main Image Container */}
      <div className="relative flex items-center justify-center  -mt-72  w-full h-screen">
        <img
          src="/bottompillar12.png"
          alt="Flagship Image"

           className="z-20 h-[37vh] w-full md:h-[102vh] lg:h-[148vh] xl:h-[140vh] object-cover -translate-x-[10px] md:-translate-x-[0px] translate-y-[20px] md:translate-y-[230px] lg:translate-y-[340px]"/>
           
        {/* Text Content */}
        <div className="relative  right-[15%] top-[calc(10%+110px)]  max-w-[400px] z-30 text-right text-white">
        
          {/* <div className="absolute top-[-150%]  md:top-[-125%] 2xl:-top-[650px]  right-[-50px] md:right-[-150px] text-right z-40">
            <h2
              className="text-[4rem] md:text-[8rem] 2xl:text-[12rem] font-samarkan lowercase leading-none m-0"
              style={{ color: "black", letterSpacing: "-1px", marginTop: "200px" }}
            >
              flagship
            </h2>
            <h2
              className="text-[4rem] md:text-[8rem] 2xl:text-[12rem] font-samarkan lowercase leading-none m-0"
              style={{ color: "#F9F1DD", letterSpacing: "-1px", marginTop: "30px" }}
            >
              project
            </h2>
          </div> */}

          {/* <div className="mt-8 md:mt-[120px] translate-x-32 2xl:translate-x-52  2xl:translate-y-72"> */}
           
          {/* Antarya Title */}
          
          {/* <h1 className="text-[3.5rem] font-helvetica font-bold -translate-x-28 2xl:translate-x-1 text-white 2xl:text-[5rem]">
            Antarya 
                        <p className="text-[1rem] font-helvetica mb-8 font-normal  2xl:text-[1.5rem] 2xl:translate-x-7  text-[#CCCCCC] tracking-wide">
 A Mythic Action-Adventure Epic  </p>
          </h1> */}


            {/* Subtitle */}
            {/* <p className="text-[1rem] font-helvetica mb-8    text-[#CCCCCC] tracking-wide">
              A Mythic Action-Adventure Epic
            </p> */}

            {/* Numbered Points */}
            {/* <div className="space-y-6 2xl:translate-x-10 mb-8">
              
              <div className="flex justify-end items-start space-x-4 max-w-[500px]  ">
                <div className="border border-[#7575756E] p-5 font-helvetica rounded-full w-7 h-7 flex items-center justify-center text-[1rem] 2xl:text-[1.5rem] 2xl:w-10 2xl:h-10 font-bold ml-1">
                  1
                </div>
                <p className="text-white text-[0.9rem] 2xl:text-[1.5rem] leading-[1.4] max-w-[500px] text-left">
                  Two siblings. A timeless mission. Divine weapons. And a destiny tied to gods and demons.
                </p>
              </div>
             
              <div className="flex justify-end items-start space-x-4 max-w-[500px]">
                <div className="border border-[#7575756E] p-5 rounded-full w-7 h-7 font-helvetica flex items-center justify-center text-[1rem]  2xl:text-[1.5rem] 2xl:w-10 2xl:h-10 font-bold ml-1">
                  2
                </div>
                <p className="text-white text-[0.9rem] 2xl:text-[1.5rem] leading-[1.4] max-w-[500px] text-left m-0">
                  Currently in development, Samsara marks our first significant step in redefining myth-meets-modern gaming.
                </p>
              </div>
            </div> */}
          {/* </div> */}

         
         {/* Learn More Button */}
{/* <div className="absolute bottom-[14%] md:bottom-[18%] lg:bottom-[0%] flex justify-center w-full z-[50]">
        <button
          className="relative flex items-center gap-2 bg-yellow-100 text-[#0300006e] py-2.5 px-5 rounded-[10px] text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] font-bold cursor-pointer
          shadow-[12px_14px_28px_rgba(212,175,55,0.7)] hover:shadow-[16px_18px_34px_rgba(212,175,55,0.85)] transition-shadow duration-300"
          onClick={() => navigate("/category")}
        >
          Learn More About Antarya
          <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center border border-[#7575756E] rounded-full text-[1rem] md:text-[1.2rem]">
            →
          </span>
        </button>
      </div> */}

        </div>
      </div>

  <img
        // src="/media/dancing.gif"
        alt="Flagship Grass"
        className="absolute top-[-19%] md:top-[13%] lg:top-[27%] xl:top-[27%] 2xl:top-[27%] w-[400%] h-[80vh]   object-contain  z-[99]"
      />

      {/* Flagship Grass Image */}
     <div className="relative w-full flex justify-center">
        <img
          src="/flagshipgrassimage.svg"
          alt="Flagship Grass"
          className="w-[400%] max-h-[200vh] -mt-60 md:mt-32 lg:mt-56 object-contain z-[20]"
        />

        {/* Button Positioned Over the Grass */}
        <div className="absolute bottom-[489%] md:bottom-[60%] lg:bottom-[59%] xl:bottom-[53%] 2xl:bottom-[59%] flex justify-center w-full z-[40]">
          <button
            className="relative flex items-center gap-2 bg-yellow-100 text-[#0300006e] py-1 px-3 rounded-[10px] text-[0.6rem] md:text-[1.1rem] lg:text-[1.3rem] font-bold cursor-pointer
            shadow-[12px_14px_28px_rgba(212,175,55,0.7)] hover:shadow-[16px_18px_34px_rgba(212,175,55,0.85)] transition-shadow duration-300"
            onClick={() => navigate("/portfolio")}
          >
            Learn More About Antarya
            <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center border border-[#7575756E] rounded-full text-[1rem] md:text-[1.2rem]">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlagShip;
