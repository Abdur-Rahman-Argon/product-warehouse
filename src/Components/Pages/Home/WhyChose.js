import React from "react";
import Accordion from "./Accordion";

const WhyChose = () => {
  const question = [
    {
      id: 1,
      question: "Over 25 years of experience?",
      answer:
        "Since 1990, we have been partnering with various suppliers and manufacturers of bike parts to provide our customers with high-quality replacement parts for their bikes for over 25 years.",
    },
    {
      id: 2,
      question: "5+ years of warranty on all parts?",
      answer:
        "Every part you buy at our store is provided with exclusive 5-year warranty and some parts from premium manufacturers have even longer warranty.",
    },
    {
      id: 1,
      question: "Worldwide delivery & the best customer service",
      answer:
        "We guarantee the best customer service with easy product returns & replacements as well as 24-hour support for all our clients. Besides, every client also gets free worldwide delivery of any part from our catalog.",
    },
  ];
  return (
    <div className="flex flex-col  lg:flex-row-reverse gap-10  heading ">
      <div className=" flex-1">
        <img
          src="https://htmldemo.net/tm/oswan/oswan/assets/img/banner/banner-1.png"
          alt=""
          className=" w-[400px]"
        />
      </div>
      <div className=" flex-1 py-8 mb-3">
        <div className=" mb-8">
          <h1 className=" text-5xl font-extrabold text-gray-800">
            Why Choose Us
          </h1>
        </div>
        <div>
          {question.map((aee) => (
            <Accordion acc={aee}></Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
