import React from 'react'
import Image from 'next/image';
import serviceParticles from '../../../../public/assets/img/services/serviceParticles.png';

interface Card {
  title: string;
  description: string;
  img: string;
}

interface Props {
  card: Card;
  gradient: string;
}

export const Card = ({card, gradient} : Props) => {

  return (
        <div className="card p-4 m-2 flex justify-center flex-col">
          <Image
            className="particle_img"
            src={serviceParticles}
            width={450}
            height={450}
            alt="Particle Image"
            priority={false}
            placeholder = 'empty'
          />
          <div className="card_img_cnt">
            <Image
              className="card_img"
              src={card.img || "/assets/img/services/GraphicsDesign.png" }
              alt="Graphics Design"
              width={150}
              height={150}
  />
            <div className="gradient-box text-white" style={{ background: gradient }}></div>
          </div>
          <div className="card_text_cnt mt-8">
            <div className="card_text_title">
              <h3 className="text-white text-2xl font-bold">{card.title || "Grpahics Design"}</h3>
            </div>
            <div className="card_text_desc w-4/5 mt-4">
              <p className="text-white text-xl ">
                {card.description || "Improve your digital platforms with results driven uxui."}
                {/* Improve your digital platforms with
                <br />
                results driven uxui. */}
              </p>
            </div>
          </div>
        </div>
  )
}
