import landingimg from "../assets/Coworking.png";

import Typewriter from "typewriter-effect";
import OurServices from "../components/OurServices";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <div className=" h-[80vh] font-poppins  ">
        <div className=" flex absolute ">
          <div className=" z-30 ">
            <div className=" text-[55px] font-extralight w-3/4  leading-tight text-blue-900 mt-20 font-poppins">
              Go Hackathon Academic Alliance Initiative
            </div>
            <div className="flex text-[55px]  items-center gap-7">
              <div className=" font-extralight text-blue-900">as</div>
              <div className="text-[35px] font-semibold text-blue-400">
                <Typewriter
                  options={{
                    strings: ["Hello", "World"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" z-0 bg-[#F4FBFF] w-[90%] items-end">
            <img src={landingimg} alt="" />
          </div>
        </div>
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <FAQs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
