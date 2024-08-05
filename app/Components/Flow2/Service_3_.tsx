import Image from "next/image"
import stylese from './Service_2_.module.css'
import img1 from './Image/Untitled design.png'

function Service_3_() {
  const content = [
    "Adobe After Effects & Lottie",
    "Airtable",
    "Around",
    "Creative Cloud",
    "Figjam",
    "Figma",
    "Notion",
    "Principle Prototypes",
    "Sketch",
    "Slack",
    "Webflow"
];

  return (
    <div>

    <div className={stylese.service_2_cnt}>
         
    <div className={stylese.left_cnt}>
<p className={stylese.text}>Specilized in our work.</p>
<div className={stylese.imageContainer}>
  <Image
    src={img1}
    alt="Description"
    layout="fill"
    objectFit="contain"
    className={stylese.image}
  />
</div>
</div>
         <div className={stylese.right_cnt}>
          {content.map((cnt,ind)=>(

          <div className={stylese.show_service}>{cnt}   <div className={stylese.arrow}>&#x2192;</div></div>

          ))}
          
         </div>

    </div>
  
</div>
  )
}

export default Service_3_
