import Image from "next/image";
import { Inscrit } from "@/app/components/inscription/Inscrit";
import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Accueil/Footer";
import Link from "next/link";

export default function inscription() {
  return (
    <div className="w-full h-screen">
      <div className="flex w-[90%] md:gap-12  mb-5 gap-8 mt-24 flex-col m-auto">
        <div></div>
        <div className="flex max-sm:flex-col m-auto items-center md:pl-20 w-full">
          <div className="bg-[#F89249] py-2 ">
            <Image
              src="../assets/dame.svg"
              alt="Menu Burger"
              width={1000}
              height={1000}
              className={`w-[250px] h-[250x] md:w-[400px] max-sm:hidden md:h-[400px] lg:w-[500px] lg:h-[500px]`}
            />
          </div>

          <Inscrit />
        </div>
      </div>
    </div>
  );
}
