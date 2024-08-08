import { useState } from "react";

const data = [
  {
    question: "How do I know if a product is available in boutiques?",
    answer:
      "You can query the status of your orders any time in the My Orders section of your account. If you are not registered at Mango.com, you can access the Orders section directly. In this case, you will need to enter your email address and order number.",
  },
  {
    question:
      "How can I find the prices or get other information about Chanel products?",
    answer:
      "You can query the status of your orders any time in the My Orders section of your account. If you are not registered at Mango.com, you can access the Orders section directly. In this case, you will need to enter your email address and order number.",
  },
  {
    question: "How many collections come out every year?",
    answer:
      "You can query the status of your orders any time in the My Orders section of your account. If you are not registered at Mango.com, you can access the Orders section directly. In this case, you will need to enter your email address and order number.",
  },
  {
    question: "Are all of the fashion collections featured on the website?",
    answer:
      "You can query the status of your orders any time in the My Orders section of your account. If you are not registered at Mango.com, you can access the Orders section directly. In this case, you will need to enter your email address and order number.",
  },
  {
    question:
      "Where do I find products that I have seen in magazines or on Social Media?",
    answer:
      "You can query the status of your orders any time in the My Orders section of your account. If you are not registered at Mango.com, you can access the Orders section directly. In this case, you will need to enter your email address and order number.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:w-8/12 w-full flex flex-col  gap-4">
      {data.map((faq, index) => (
        <div
          key={index}
          className="border border-solid rounded-sm p-4 w-[1240px] bg-white shadow-md"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p
              className={`text-gray-800 font-medium ${
                activeIndex === index ? "font-semibold" : ""
              }`}
            >
              {faq.question}
            </p>
            <img
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
              alt="toggler"
            />
          </div>
          <div className={`mt-4 ${activeIndex === index ? "block" : "hidden"}`}>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { FAQ };
