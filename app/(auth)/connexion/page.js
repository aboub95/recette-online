import Image from "next/image";
import { Connexion } from "@/app/components/inscription/Connexion";
import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Accueil/Footer";

export default function connecte() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="flex w-[90%] gap-8 flex-col m-auto">
        <div className="flex max-sm:flex-col py-2 m-auto items-center md:pl-20 w-full">
          <div className="bg-[#F89249] py-2 mr-8 ">
            <Image
              src="../assets/dame.svg"
              alt="Menu Burger"
              width={1000}
              height={1000}
              className={`w-[250px] h-[300x] md:w-[400px] max-sm:hidden md:h-[400px] lg:w-[500px] lg:h-[500px]`}
            />
          </div>
          <Connexion />
        </div>
      </div>
      <Footer />
    </div>
  );
}
