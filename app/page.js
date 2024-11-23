import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Navbar";
import Accueil from "./components/Accueil/Accueil";
<<<<<<< HEAD
import Section1 from "./components/Accueil/section1";
import Section2 from "./components/Accueil/section2";
import Section3 from "./components/Accueil/section3";
import Footer from "./components/Accueil/Footer";
=======
import { Publier } from "./components/Publication/Publier";
>>>>>>> 30985a1866e18dd5bc9182789c820df5abfe55d7

export default function page() {
  return (
    <>
      <Nav />
      <Accueil />
<<<<<<< HEAD
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
=======
      <Publier />
>>>>>>> 30985a1866e18dd5bc9182789c820df5abfe55d7
    </>
  );
}
