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
<p className={stylese.text}>Tools we use.</p>
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
         <div className={stylese.lineup}><p>TOOLS</p> <div className={stylese.linesd}></div> </div>
          {content.map((cnt,ind)=>(

          <div key={ind} className={stylese.show_service}><h3>{cnt}</h3>   <div className={stylese.arrow}>&#x2192;</div></div>

          ))}
          
         </div>

    </div>
  
</div>
  )
}

export default Service_3_
