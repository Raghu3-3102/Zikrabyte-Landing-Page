import Image from "next/image";
import pen from "../../../../public/assets/images/pencil.gif";

export const Lets = () => {
  return (
    <div>
      <div className="ml-5 md:ml-10">
        <h2 className="text-start text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          Let&apos;s
          <Image src={pen} alt="pen" width={100} height={100} className="inline-block w-12  md:w-16 lg:w-28" />
          Talk
        </h2>
      </div>
      <p className="text-xs font-light md:text-xl lg:text-3xl md:font-medium ml-5 md:ml-10">
        Share your ideas, and we&apos;ll create engaging designs.
      </p>
      <div className="mt-12 mx-5 md:mx-10 flex flex-col md:flex-row mb-10">
        <div className="w-auto md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Discover us</h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-light">
            We are here to help you; 
            Our experts are available to answer any questions you might
            have. We&apos;ve got the answers.
          </p>
          <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-semibold">Visit us</h2>
          <p className="mt-2 text-base md:text-lg lg:text-xl font-light">
            Jayanagar 9th Block, Bangalore, Karnataka.
          </p>
          <p className="mt-2 text-base md:text-lg lg:text-xl font-light">
            Feel free to get in touch with us through our channels:
          </p>
          <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-semibold">Email us</h2>
          <p className="mt-2 text-base md:text-lg lg:text-xl font-light">flick@flick.com</p>
          <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-semibold">Call Us</h2>
          <p className="mt-2 text-base md:text-lg lg:text-xl font-light">
            +971-4-576-6770 <br />
            +971-55-983-7007
          </p>
        </div>
        <div className="mx-5 w-auto md:w-1/2 ">
          <Image
            className=" mt-8 md:mt-0"
            src="/assets/images/group.png"
            alt="group"
            width={700}
            height={648.9}
            
          />
        </div>
      </div>
    </div>
  );
};
