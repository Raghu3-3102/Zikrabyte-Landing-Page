export const Footer = () => {
  return (
    <footer className="bg-zik-orange text-white w-full py-5">
      
        <div className="flex-1 mb-5 md:mb-0">
          <h3 className="text-white text-4xl text-center md:text-left md:text-5xl lg:text-7xl font-extrabold ml-0 mb-5 md:ml-10 lg:ml-20 mt-10">
            Zikrabyte
          </h3>
          <hr className="bg-black h-1 border-0 mx-10 md:mx-10" />
        </div>

        <div className="flex flex-col sm:flex-col md:justify-evenly lg:justify-around md:flex-row ml-10 md:ml-0 mt-5">
            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl md:text-xl lg:text-4xl font-bold mb-2">
                Who We Are
              </h4>
              <ul className="list-none p-0 text-black font-normal md:font-medium text-xl md:text-lg lg:text-2xl">
                <li>About us</li>
                <li>Career</li>
              </ul>
            </div>


            <div className="mb-5 md:mb-0 md:w-1/6 lg:w-auto">
              <h4 className="text-black text-2xl md:text-xl lg:text-4xl font-bold mb-2">
                Technology
              </h4>
              <p className="text-black font-normal md:text-lg md:font-medium text-xl lg:text-2xl">
                We Cover Everything
              </p>
            </div>

            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl md:text-xl lg:text-4xl font-bold mb-2">
                Quick Links
              </h4>
              <ul className="list-none p-0 text-black md:text-lg font-normal md:font-medium text-xl lg:text-2xl">
                <li>Career</li>
                <li>Contact Us</li>
                <li>Projects</li>
              </ul>
            </div>
          
            <div className="mb-5 md:mb-0 md:w-1/5 lg:w-auto">
              <h4 className="text-black text-2xl md:text-xl lg:text-4xl font-bold mb-2">
                What we do
              </h4>
              <ul className="list-none p-0 text-black md:text-lg font-normal md:font-medium text-xl lg:text-2xl">
                <li>Web Design & Development</li>
                <li>App Design & Development</li>
                <li>Digital Marketing</li>
                <li>Branding</li>
              </ul>
            </div>

            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold md:text-xl lg:text-4xl mb-2">Socials</h4>
              <ul className="list-none p-0 text-black md:text-lg font-normal md:font-medium text-xl lg:text-2xl">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
        </div>

      <div className="text-black text-2xl font-bold ml-5 md:ml-10 mt-5 lg:ml-20">
        <p>Contact: project@zikrabyte.com</p>
      </div>
      <hr className="bg-black h-1 border-0 mt-5 mx-5 md:mx-10" />
    </footer>
  );
};
