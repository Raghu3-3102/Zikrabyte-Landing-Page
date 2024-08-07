import React from 'react'
import style from './About.module.css'
import Image from 'next/image'
import { FirstChar, Sarah, Michael, Emily } from './Images'
import BtnDiv from './BtnDiv'

const SecondPage = () => {
  return (<>
    <div className={style.secondPageWrapper}>
    <div className={style.secondTextBox}>
    <div className={style.secondHeadline}>
        <h1 className={style.secondHeadFirst}>Our</h1>
        <h1 className={style.secondHeadSecond}>Team Members</h1>
    </div>
    <p className={`${style.topPara} ${style.widthFixer}`} >Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
  </div>

  <div className={style.cardContainer}>
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={FirstChar} alt="john smith" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>John Smith</h2>
            <div className={style.memberPost}>Co-Founder & CEO</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={Sarah} alt="sarah adams" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>Sarah Adams</h2>
            <div className={style.memberPost}>Head of Design</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={Michael} alt="Michael" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>Mitchael williams</h2>
            <div className={style.memberPost}>Project Manager</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={Emily} alt="emily" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>Emily Johnson</h2>
            <div className={style.memberPost}>Lead Web Developer</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={FirstChar} alt="john smith" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>John Smith</h2>
            <div className={style.memberPost}>Co-Founder & CEO</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={FirstChar} alt="john smith" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>John Smith</h2>
            <div className={style.memberPost}>Co-Founder & CEO</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={FirstChar} alt="john smith" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>John Smith</h2>
            <div className={style.memberPost}>Co-Founder & CEO</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    <div className={style.cardGrid} >
    <div className={style.cardGrid} >
        <div className={style.cardUpperHalf}>
            <div className={style.ringOne}>
             <div className={style.ringTwo}>
                    <Image src={FirstChar} alt="john smith" className={style.ringThree}/>
             </div>
            </div>
            <h2 className={style.memberName}>John Smith</h2>
            <div className={style.memberPost}>Co-Founder & CEO</div>
            <hr className={style.hrGradLine} />
        </div>
        <div className={style.DivForSocialRefs}>
            <BtnDiv />
        </div>
    </div>
    </div>
    </div>

    </div>
  </>
  
  )
}

export default SecondPage