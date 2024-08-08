
import Image from 'next/image'
import img1 from './Image/Rectangle 24872.png'
import stylese from  './Service_2_.module.css'


function Service_2() {

  let content = ['UI UX DESIGNER','App Icon Design',
                  'App Design','Brand Gauidline',
                  'Branding','Concept Design',
                  'Content Management system','Website Design',
                  'Webs Devlopment','Graphics Design',
                  'Iconography','illustration','infographi',
                  'Marketing Assets','Morion Design',
                  'Pich Deeks','Print Material','Product Design','Strtgy'

  ]


  return (
    <div>

        <div className={stylese.service_2_cnt  } >
             
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

              <div key={ind} className={stylese.show_service}>{cnt}   <div className={stylese.arrow}>&#x2192;</div></div>

              ))}
              
             </div>

        </div>
      
    </div>
  )
}

export default Service_2
