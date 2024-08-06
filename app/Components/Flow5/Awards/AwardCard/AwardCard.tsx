import React from 'react';
import TrophyIcon from "../../../../../public/assets/img/Achievements/TropyIcon.png";  
import calendar from "../../../../../public/assets/img/Achievements/calendar.png";    
import Image from 'next/image';

interface AwardCard {
    title: string;
    description: string;
    time: string;
    why: string;
}

interface Props {
    award: AwardCard;
}

export const AwardCard = ({award}: Props) => {
  return (
    <div className='flex flex-col p-4 sm:p-8 lg:p-12 bg-stone-700 rounded-xl items-center justify-around felx-wrap w-[80%] min-h-[45vw] md:w-[40%] text-center gap-2' style={{backgroundColor:'#363636'}} >
      <Image src={TrophyIcon} alt="Trophy Icon"/>

      <h5 className="flex flex-row gap-2 rounded-full border justify-center items-center border-orange-500 text-orange-500  px-4 py-3 "> <span><Image src={calendar} alt="calendar" /></span> {award.time}</h5>

      <h4 className="text-2xl font-base text-orange-500">{award.title}</h4>

      <p className="text-gray-200">{award.description}</p>

      <div className="w-full flex  bg-zinc-900 text-gray-300 flex-col rounded-3xl text-center px-2 py-3 md:px-12 md:py-14 gap-1 md:gap-4 mt-6">
            <h5 className="text-lg">Why</h5>
            <p className="">{award.why}</p>
          </div>

        
    </div>
  )
}
