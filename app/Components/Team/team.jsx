import Circle from './Circle';
import Image from 'next/image';


export const Team = () => {
  return (
    <div>
      <div className="team">
        <h1 className="team-heading">Our teams are led by bold creative vision and multi-disciplinary experience</h1>
      </div>
      <div className="container">
        <div className="imageContainer">
          <Image src="/assets/images/t1.jpg" alt="Image 1" width={320} height={440} />
          <h2 className="th">Christopher</h2>
          <div className="circle">View</div>
        </div>
        <div className="imageContainer">
          <Image src="/assets/images/t2.jpg" alt="Image 2" width={320} height={440} />
          <h2 className="th">Jazzmine</h2>
          <div className="circle">View</div>
        </div>
        <div className="imageContainer">
          <Image src="/assets/images/t3.jpg" alt="Image 3" width={320} height={440} />
          <h2 className="th">Stephine</h2>
          <div className="circle">View</div>
        </div>
        <div className="imageContainer">
          <Image src="/assets/images/t4.jpg" alt="Image 4" width={320} height={440} />
          <h2 className="th">William</h2>
          <div className="circle">View</div>
        </div>
      </div>
      <div class="ani">
    <h2 class="ch2">
      Let&apos;s
      <div class="pen">
        <div class="top"></div>
        <div class="mid">
          <div class="limi"></div>
        </div>
        <div class="last"></div>
      </div>Talk
    </h2>
  </div>
      <p className="lp-1">Share your ideas, and we&apos;ll create engaging designs.</p>
      <div className="lets-container">
        <div>
          <h2 className="lh-1">Discover us</h2>
          <p className="lp-2">We are here to help you; <br />
            Our experts are available to answer any questions you might <br /> have. We&apos;ve got the answers.</p>
          <h2 className="lh">Visit us</h2>
          <p className="lp">jayanagar 9th nlovk, bangalore, karnataka.</p>
          <p className="lp">Feel free to get in touch with us through our channels:</p>
          <h2 className="lh">email us</h2>
          <p className="lp">flick@flick.com</p>
          <h2 className="lh">Call Us</h2>
          <p className="lp">+971-4-576-6770 <br />+971-55-983-7007</p>
        </div>
        <div>
          <Image className="gr" src="/assets/images/group.png" alt="group" width={700} height={648.9}/>
        </div>
      </div>
      <Circle />
    </div>
  );
};

