import React from "react";
import { AwardCard } from "./AwardCard/AwardCard";

export const Awards = () => {
    const awards = [
        {
            "title":"Digital Excellence Award",
            "description":"Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
            "time":"October 2017",
            "why":"Innovative web design and development solutions."
        },
        {
            "title":"Digital Excellence Award",
            "description":"Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
            "time":"October 2017",
            "why":"Innovative web design and development solutions."
        },
        {
            "title":"Digital Excellence Award",
            "description":"Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
            "time":"October 2017",
            "why":"Innovative web design and development solutions."
        },
        {
            "title":"Digital Excellence Award",
            "description":"Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
            "time":"October 2017",
            "why":"Innovative web design and development solutions."
        },
    ]

  return (
    <div className="achievement_section w-screen flex flex-col items-center bg-white py-16">
      <div className="w-full flex flex-col text-center items-center">
        <h2 className="text-5xl sm:text-7xl font-semibold text-gray-500">
          Our <span className="text-orange-500">Awards & Recognitions</span>
        </h2>
        <p className="w-[60%] mt-8 text-xl text-black">
          Witness the brilliance of our previous projects. Our portfolio
          showcases the successful collaborations we&apos;ve had with diverse
          clients across various industries. Let our work speak for itself.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap mt-16 gap-12">
        {/* <AchievementCard achievement={awards[0]}/>  */}
        {awards.map((award, index) => (
          <AwardCard award={award} key={index} />
        ))}
      </div>
    </div>
  );
};
