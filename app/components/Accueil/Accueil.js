import Link from "next/link";
import Image from "next/image";

export default function Accueil() {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={{ backgroundImage: `url(/cuissine/cuissne.png)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 px-5">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-5">
          Plongez dans notre univers culinaire et découvrez des recettes
          savoureuses qui raviront vos papilles et celles de
          <br className="hidden md:block" /> vos proches !
        </h1>

        <div className="flex justify-center items-center mt-20 ">
          <input
            type="text"
            placeholder="Trouver votre recette..."
            className="h-10 w-72 max-sm:w-48 rounded-2xl pl-7 mr-5 mt-5 border border-cyan-500 focus:border-cyan-400 outline-none"
          />
          <Link href="/about">
            <button className="mt-5  bg-cyan-600 text-white text-lg md:text-xl w-40 max-sm:w-32 h-10 rounded-2xl hover:bg-orange-600 transition">
              Rechercher
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
