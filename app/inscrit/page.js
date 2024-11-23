import Link from "next/link";
import Image from "next/image";
// import Nav from "../components/Navbar";
// import Footer from "../components/Accueil/Footer";

export default function Inscription() {
  return (
    <div>
      {/* <Nav /> */}
      <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[600px] px-4">
        <Image
          src="/cuissine/chef cuisto.jpg"
          width={600}
          height={600}
          alt="Un chef cuisto en cuisine"
          className="w-full md:w-1/3 max-w-[400px] rounded-md object-cover h-[600px]"
        />
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-8">
          <h1 className="text-xl md:text-3xl text-center md:text-left font-bold mb-6">
            Veuillez remplir le formulaire pour votre inscription.
          </h1>
          <form className="flex flex-col gap-6 items-center md:items-start">
            <div className="w-full md:w-2/3">
              <label className="block text-sm font-medium mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Entrez votre Nom"
                required
                className="w-full border border-cyan-500 focus:border-cyan-400 outline-none rounded-md px-3 py-2"
              />
            </div>
            <div className="w-full md:w-2/3">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-cyan-500 focus:border-cyan-400 outline-none rounded-md px-3 py-2"
              />
            </div>
            <div className="w-full md:w-2/3">
              <label className="block text-sm font-medium mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Entrez votre mot de passe"
                className="w-full border border-cyan-500 focus:border-cyan-400 outline-none rounded-md px-3 py-2"
              />
            </div>
            <div className="w-full md:w-2/3">
              <button
                type="submit"
                className="bg-cyan-500 text-white rounded-md py-2 mt-4 w-full max-sm:mb-8 hover:bg-cyan-600 transition-colors"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
