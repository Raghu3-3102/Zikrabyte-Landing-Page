import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './StatisticsCounter.css';
import ClientIcon from '../../../../public/assets/img/Statistics/clientIcon.gif';
import ThreeEmoji from '../../../../public/assets/img/Statistics/ThreeEmoji.gif'; 
import projectIcon from '../../../../public/assets/img/Statistics/projectsIcon.png';
import illustration1 from '../../../../public/assets/img/Statistics/illustration1.png';
import illustration2 from '../../../../public/assets/img/Statistics/illustration2.png';
import illustration3 from '../../../../public/assets/img/Statistics/illustration3.png';


interface CardProps {
  title: string;
  content: string;
  images: StaticImageData[]; 
  illustration: StaticImageData;
  illustrationClass: string; 
}

const Card = ({ title, content, images, illustration, illustrationClass }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-content">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={content} width={80} height={80} />
        ))}
        </div>
        <div className="card-illustration">
        <Image src={illustration} alt="illustration" className={illustrationClass}  />
        </div>
      <div className="card-footer">{content}</div>
    </div>
  );
};

export default function StatisticsCounter() {
  return (
    <div className="card-container">
      <Card
        title="Clients"
        content="100+ Trusted Clients"
        images={[ClientIcon]} 
        illustration={illustration1}
        illustrationClass="illustration-Clients" 
      />
      <Card
        title="Team"
        content="55 Dedicated Soldiers"
        images={[ThreeEmoji]}
        illustration={illustration2}
        illustrationClass="illustration-Team" 
      />
      <Card
        title="Projects"
        content="55 Successfully Delivered"
        images={[projectIcon]}
        illustration={illustration3}
        illustrationClass="illustration-Projects" 
      />
    </div>
  );
}
