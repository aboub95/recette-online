import Link from "next/link";
import Image from "next/image";

export default function Section1() {
  const images = [
    "/cuissine/frite.jpg",
    "/cuissine/plat4.jpg",
    "/cuissine/plat1.jpg",
    "/cuissine/salade 2.jpg",
    "/cuissine/salade 1.jpg",
    "/cuissine/salade3.jpg",
    "/cuissine/plat7.jpg",
    "/cuissine/poisson.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-center text-3xl font-bold mt-10">
        Nos Recettes du jour
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mt-10">
        {images.map((image, index) => (
          <div
            className="rounded-xl bg-slate-200 shadow-lg hover:shadow-xl transition-shadow"
            key={index}
          >
            <Link href={`/recette/${index + 1}`}>
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={image}
                  alt={`Recette ${index + 1}`}
                  width={2000}
                  height={2000}
                  className="w-full h-96 max-sm:h-40 hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">
                  Recette {index + 1}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/">
          <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition">
            Voir toutes les recettes
          </button>
        </Link>
      </div>
    </div>
  );
}
