import React from 'react';
import style from './About.module.css';
import Image from 'next/image';
import { FirstChar, Sarah, Michael, Emily } from './Images';
import BtnDiv from './BtnDiv';

const teamMembers = [
  {
    name: 'John Smith',
    post: 'Co-Founder & CEO',
    image: FirstChar,
  },
  {
    name: 'Sarah Adams',
    post: 'Head of Design',
    image: Sarah,
  },
  {
    name: 'Michael Williams',
    post: 'Project Manager',
    image: Michael,
  },
  {
    name: 'Emily Johnson',
    post: 'Lead Web Developer',
    image: Emily,
  },
  {
    name: 'John Smith',
    post: 'Co-Founder & CEO',
    image: FirstChar,
  },
  {
    name: 'Sarah Adams',
    post: 'Head of Design',
    image: Sarah,
  },
  {
    name: 'Michael Williams',
    post: 'Project Manager',
    image: Michael,
  },
  {
    name: 'Emily Johnson',
    post: 'Lead Web Developer',
    image: Emily,
  }
];

const SecondPage = () => {
  return (
    <div className={style.secondPageWrapper}>
      <div className={style.secondTextBox}>
      <div className={style.secondHeadline}>
        <h1 className={style.secondHeadFirst}>Our</h1>
        <h1 className={style.secondHeadSecond}>Team Members</h1>
    </div>
    <p className={`${style.topPara} ${style.widthFixer}`} >Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
    </div>
      <div className={style.cardContainer}>
        {teamMembers.map((member, index) => (
          <div className={style.cardGrid} key={index}>
            <div className={style.cardUpperHalf}>
              <div className={style.ringOne}>
                <div className={style.ringTwo}>
                  <Image src={member.image} alt={member.name} className={style.ringThree} />
                </div>
              </div>
              <h2 className={style.memberName}>{member.name}</h2>
              <div className={style.memberPost}>{member.post}</div>
              <hr className={style.hrGradLine} />
            </div>
            <div className={style.DivForSocialRefs}>
              <BtnDiv />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;