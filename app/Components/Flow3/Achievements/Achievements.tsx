import React from 'react'
import { AchievementCard } from './AchievementCard/AchievementCard'

export const Achievements = () => {

    const achievemetnts = [
        {
            "id": "001",
            "title" : "Foundation of Zikrabyte",
            "description" : "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
            "time": "October 2015"
        },
        {
            "id":"002",
            "title" : "100 Successful Projects",
            "description" : "We celebrated a significant milestone of completing 100 successful projects, marking our commitment to delivering excellence in every endeavor. Our diverse portfolio showcased our ability to cater to various industries and client requirements.",
            "time": "June 2018"
        },
        {
            "id":"003",
            "title" : "Expansion to International Projects",
            "description" : "We expanded our services to international clients, opening new avenues for growth and global collaboration. Our expansion into international markets solidified our position as a leading digital agency with a global footprint.",
            "time": "August 2019"
        },
        {
            "id":"004",
            "title" : "Thrive to create something great",
            "description" : "To foster creativity and innovation, we inaugurated the DigitX Innovation Lab. This state-of-the-art facility served as a hub for our team to ideate, experiment, and explore emerging technologies.",
            "time": "March 2021"
        },
        {
            "id":"005",
            "title" : "500 Satisfied Clients",
            "description" : "We celebrated reaching a milestone of serving 500 satisfied clients, further strengthening our reputation for customer-centric services and successful project outcomes.",
            "time": "September 2023"
        },
    ]

  return (
    <div className='achievement_section w-screen flex flex-col items-center bg-black pt-16'>
        <div className="w-full flex flex-col text-center items-center">
            <h2 className="text-7xl font-semibold text-white">
                Our <span className='text-orange-500'>Achievements</span>
            </h2>
                <p className='w-[60%] mt-8 text-lg text-white'>Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with diverse
                clients across various industries. Let our work speak for itself.</p>
        </div>

<div className="flex flex-col items-center mt-16">
    {/* <AchievementCard achievement={achievemetnts[0]}/>  */}
    {achievemetnts.map((achievement) => (
        <AchievementCard achievement={achievement} key={achievement.id}/>
    ))}
</div>
    </div>
  )
}
