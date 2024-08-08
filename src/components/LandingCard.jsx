import bgimage from "../assets/bgimg.png";

export default function LandingCard({ title, icon }) {
  return (
    <div>
      <div className="w-[315px] h-[204px] border-2 border-blue-800 rounded-[30px]">
        <div className="relative h-full flex flex-col items-center justify-center">
          <img className="z-0 w-[157.72px]" src={bgimage} alt="" />
          <img className="absolute z-20 top-14 w-[63px]" src={icon} alt="" />
          <div className="mt-4 font-semibold  text-blue-950 text-[15px]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
