"use client";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <main className="w-full">
      <div className="w-[95%] bg-[#E6E6E6] max-sm:px-3 md:px-4 lg:0px py-8 max-sm:pb-3 m-auto flex max-sm:flex-col items-center gap-6 md:gap-12 md:justify-center">
        <div className="max-sm:mt-4">
          <Image
            src="../assets/platre1.svg"
            alt="Menu Burger"
            width={1000}
            height={1000}
            className={`w-[250px] h-[250x] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]`}
          />
        </div>
        <div className="flex flex-col gap-8 max-sm:px-4 md:gap-16">
          <h1 className="font-bold text-3xl md:text-4xl">Crêpes Boosté</h1>
          <div className="flex flex-col gap-3">
          <div className="flex gap-5 items-center">
            <div className="border-r-2 pr-8 border-black">
              <p className="">Préparation</p>
              <p className="font-bold">20min</p>
            </div>
            <div className="border-r-2 border-black pr-2">
              <p>Cuisson</p>
              <p className="font-bold">15min</p>
            </div>
            <div className="">
              <p>Portions</p>
              <p className="font-bold">4</p>
            </div>
            <HeartIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-gray-500" />
              <StarIcon className="h-4 w-4 text-gray-500" />
              <StarIcon className="h-4 w-4 text-gray-500" />
              <StarIcon className="h-4 w-4 text-gray-500" />
              <StarIcon className="h-4 w-4 text-gray-500" />
            </div>
            <p>Evaluer cette recette</p>
          </div>
          <p className="max-sm:text-sm">Cette recette de Crêpes Boosté s’ajoutera facilement à notre rotation de <br></br> soupers de semaine. Impossible de résister à sa texture hyper croustillante, <br></br>qu’on obtient en enrobant les morceaux de tofu de fécule de maïs, ainsi qu’à <br></br> sa sauce sucrée-salée et sirupeuse. Un plat qui rappelle notre tofu Général <br></br> Tao,mais avec une saveur d’orange.</p>
        </div>
        </div>
      </div>
    </main>
  );
}
