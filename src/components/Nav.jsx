import logo from "../assets/logo.png";
import home from "../assets/Vector.png";

const listrouts = [
  { path: "/", title: "About Us", svg: "fad" },
  { path: "/", title: "About Us", svg: "fad" },
  { path: "/", title: "About Us", svg: "fad" },
  { path: "/", title: "About Us", svg: "fad" },
];

export default function Nav() {
  return (
    <>
      <div className="flex items-center justify-between md:mt-[32px] md:mb-[32px] font-poppins">
        <div>
          <img className="h-[88px]" src={logo} alt="logo" />
        </div>
        <div className=" bg-primary-color w-fit h-[72px] rounded-full flex items-center p-6">
          <div className=" bg-white px-9 py-2 rounded-full ">
            <img src={home} className="w-[37px] h-[27px]" alt="" />
          </div>
          <div className="flex items-center text-white gap-8 ml-5">
            {listrouts.map((item, idx) => (
              <>
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 "
                >
                  <div>{item.title}</div>
                  <div></div>
                </div>
              </>
            ))}
            <div className=" text-primary-color hover:bg-zinc-900 bg-white px-3 py-3 rounded-lg flex items-center text-center">
              sign in / sign up
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
