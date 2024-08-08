import { Fragment } from "react";
import landingimg from "../assets/logo.png";
import { Linkedin, Twitter, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <div className=" h-[356px] bg-[#E4EBF4] flex justify-between font-poppins ">
      <div className=" flex gap-4 flex-col ml-5 items-center w-[232px]">
        <img src={landingimg} alt="" className=" w-[232px] p-3" />

        <div className="text-[16px] w-[170px]">
          <strong>India Office:</strong>H-87, Sector-63, Noida, U.P, 201301
        </div>
      </div>
      <div className=" flex gap-6 items-center px-10">
        <FooterList
          title="Company"
          list={[
            "About Us",
            "Contact",
            "Privacy Policy",
            "Terms & Conditions",
            "Blog",
          ]}
        />
        <FooterList
          title="Services"
          list={[
            "About Us",
            "Contact",
            "Privacy Policy",
            "Terms & Conditions",
            "Blog",
          ]}
        />
        <FooterList
          title="Contact"
          list={[
            "About Us",
            "Contact",
            "Privacy Policy",
            "Terms & Conditions",
            "Blog",
          ]}
        />
        <div>
          <FooterIcon />
        </div>
      </div>
    </div>
  );
}

const FooterList = ({ title, list }) => {
  return (
    <>
      <div className=" w-[199px] h-[189px]">
        <div className=" text-[16px]">{title}</div>
        <hr className=" h-[2px] mt-[2px] mb-[10px] bg-black  w-[199.5px]" />
        <div className=" flex flex-col gap-2">
          {" "}
          {list.map((item, idx) => (
            <Fragment key={idx}>
              <div className=" text-[12px]">{item}</div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

const FooterIcon = () => {
  return (
    <>
      <div className=" w-[199px] h-[189px]">
        <div className=" text-[16px]">Follow Us</div>
        <hr className=" h-[2px] mt-[2px] mb-[10px] bg-black  w-[199.5px]" />
        <div className=" flex  gap-2">
          <div className="p-2 bg-blue-300 rounded-full">
            <Linkedin />
          </div>
          <div className="p-2 bg-blue-300 rounded-full">
            <Twitter />
          </div>
          <div className="p-2 bg-blue-300 rounded-full">
            <Facebook />
          </div>
        </div>
      </div>
    </>
  );
};
