import React from 'react'

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
        <div className="card p-4 m-2 flex justify-center gap-4 flex-col">
          <img
            className="particle_img"
            src="assets\img\services\service__particles.png"
            alt=""
          />
          <div className="card_img_cnt">
            <img
              className="card_img"
              src={card.img || "assets\img\services\GraphicsDesign.png" }
              alt="Graphics Design"
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
