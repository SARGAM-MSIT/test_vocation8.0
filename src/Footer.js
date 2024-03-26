import React from "react";
import fb from "./assets/fb1.png";
import insta from "./assets/insta1.png";
import { Divider } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div className="w-full bg-bg2 px-8 md:px-12 lg:px-36 box-border ">
      <div className="inline-flex flex-col md:flex-row w-full h-full align-middle justify-center py-10 gap-4">
        <div className="md:w-1/2 lg:1/3 text-wrap text-white font-font3 my-auto">
        SARGAM
The pulsating heart and the official Music Club of MSIT 
Here harmonizing talents , fostering creativity and elevating campus melodies. From vibrant jam sessions to soul stirring performances, where each chord strummed and lyric sung reflects the vibrant spirit of our college's musical culture.
        </div>
        <hr className="w-full h-[2px] md:h-32 my-auto md:w-[2px] bg-white text-white " />
        <div className="text-white text-xl font-semibold font-font5 inline-flex flex-col gap-2 justify-center text-center">
          Contact Us: 7605802236
          <div className="inline-flex justify-center gap-4">
            <div className="w-8">
              <img src={fb} className="w-full object-contain" alt="" />
            </div>
            <div className="w-8">
              <img src={insta} className="w-full object-contain" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
