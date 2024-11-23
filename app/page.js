import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Navbar";
import Accueil from "./components/Accueil/Accueil";
import { Publier } from "./components/Publication/Publier";

export default function page() {
  return (
    <>
      <Nav />
      <Accueil />
      <Publier />
    </>
  );
}
