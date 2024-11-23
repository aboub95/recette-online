import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Section1 from "./components/Accueil/section1";
import Section2 from "./components/Accueil/section2";
import Section3 from "./components/Accueil/section3";
import Footer from "./components/Accueil/Footer";
import { Publier } from "./components/Publication/Publier";

export default function page() {
  return (
    <>
      <Nav />
      <Accueil />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      {/* <Publier /> */}
    </>
  );
}
