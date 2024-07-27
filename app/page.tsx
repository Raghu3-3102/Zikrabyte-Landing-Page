import Image from "next/image";
import { Navbar } from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import { Offer } from "./Components/Offer/Offer";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Home />
      <Offer />
    </main>
  );
}
