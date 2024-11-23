import Link from "next/link";

export default function Section3() {
  return (
    <section
      className="h-[600px] w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: `url(/cuissine/Background.jpg)` }}
    >
      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
        La gourmandise au bout des doigts !
      </h1>

      {/* Description */}
      <p className="text-base md:text-lg lg:text-xl text-black max-w-2xl mb-6">
        Avec notre plateforme, accédez à une foule de recettes et conseils, tout
        en découvrant des saveurs gourmandes d’ici et d’ailleurs.
      </p>

      {/* Bouton "Voir plus" */}
      <Link href="/">
        <button className="bg-orange-500 text-white py-3 px-8 text-lg md:text-xl lg:text-2xl rounded-3xl hover:bg-orange-600 transition">
          Voir plus
        </button>
      </Link>
    </section>
  );
}
