import React from "react";
import calendar from "../../../../../public/assets/img/Achievements/calendar.png";  
import Image from 'next/image'

interface AchievementCard {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface Props {
  achievement: AchievementCard;
}

export const AchievementCard = ({ achievement }: Props) => {
  return (
    <div className="flex  max-w-[80%] text-white p-4 m-4">
      <div className="flex flex-col lg:flex-row gap-0 md:gap-5">
        <div className="flex">
          <p className="text-9xl text-bold text-orange-400 font-semibold">{achievement.id}</p>
        </div>
        <div className="flex flex-col pt-2 md:pt-4 lg:pt-9">
          <div className="flex flex-row justify-between items-center my-3 md:my-8">
            <h4 className="text-2xl font-semibold">{achievement.title}</h4>
            <h5 className="flex flex-row gap-2 rounded-full border justify-center items-center border-white text-orange-500  px-4 py-3 "> <span><Image src={calendar} alt="calendar" /></span> {achievement.time}</h5>
          </div>
          <div className="flex border-gray-400 bg-zinc-900 flex-col rounded-3xl px-12 py-14 gap-4 mt-6">
            <h5 className="text-lg">Description</h5>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
