export const Footer = () => {
  return (
    <footer className="bg-zik-orange text-white w-full py-5">
      
        <div className="flex-1 mb-5 md:mb-0">
          <h3 className="text-white text-4xl text-center md:text-left md:text-5xl lg:text-7xl font-extrabold ml-0 mb-1 md:ml-10 mt-10">
            Zikrabyte
          </h3>
          <hr className="bg-black h-1 border-0 mx-10 md:mx-10" />
        </div>

        <div className="flex-1 ml-10 md:ml-0">
          <div className="flex flex-col pt-2 md:pt-10 md:flex-row justify-evenly">
            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold mb-2">
                Who We Are
              </h4>
              <ul className="list-none p-0 text-black font-normal md:font-medium text-xl">
                <li>About us</li>
                <li>Career</li>
              </ul>
            </div>

            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold mb-2">
                Technology
              </h4>
              <p className="text-black font-normal md:font-medium text-xl mt-5">
                We Cover Everything
              </p>
            </div>

            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold mb-2">
                Quick Links
              </h4>
              <ul className="list-none p-0 text-black font-normal md:font-medium text-xl">
                <li>Career</li>
                <li>Contact Us</li>
                <li>Projects</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start  md:justify-center py-5">
            <div className="bg-black h-1 w-2/3"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly md:pt-5 lg:pt-10">
            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold mb-2">
                What we do
              </h4>
              <ul className="list-none p-0 text-black font-normal md:font-medium text-xl">
                <li>Web Design & Development</li>
                <li>App Design & Development</li>
                <li>Digital Marketing</li>
                <li>Branding</li>
              </ul>
            </div>

            <div className="mb-5 md:mb-0">
              <h4 className="text-black text-2xl font-bold mb-2">Socials</h4>
              <ul className="list-none p-0 text-black font-normal md:font-medium text-xl">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

      <div className="text-black text-2xl font-bold ml-5 md:ml-10 mt-5">
        <p>Contact: project@zikrabyte.com</p>
      </div>
      <hr className="bg-black h-1 border-0 mt-5 mx-5 md:mx-10" />
    </footer>
  );
};
