import roficon from "../assets/roficon.png";
import LandingCard from "./LandingCard";

const cardlist = [
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
  { title: "Workshop", icon: roficon },
];

export default function OurServices() {
  return (
    <div className="my-8 mb-10">
      <div className="font-semibold text-5xl font-poppins text-center mb-8">
        Our Servicest
      </div>
      <div className=" grid grid-cols-3 grid-rows-3 gap-5 ">
        {cardlist.map((item, idx) => (
          <>
            <div key={idx} className="flex items-center justify-center">
              <LandingCard title={item.title} icon={item.icon} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
