import Image from "next/image";
import { Navbar } from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import { Offer } from "./Components/Offer/Offer";
import { Service } from "./Components/Service/Service";
import { Team } from "./Components/Team/Team";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Home />
      <Offer />
      <Service />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
