import { FAQ } from "./FAQ";

export default function FAQs() {
  return (
    <>
      <div className="flex flex-col gap-36 items-center justify-center">
        <div className=" text-center  bg-primary-color rounded-full h-[60px] flex items-center justify-center text-[24px] px-6 w-[200px] py-2 font-bold text-white">
          FAQs
        </div>
        <div className=" mb-20">
          <FAQ />
        </div>
      </div>
    </>
  );
}
