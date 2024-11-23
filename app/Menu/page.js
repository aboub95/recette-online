import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Navbar";
import Footer from "../components/Accueil/Footer";

// Exemple de tableau d'images. Remplacez les URLs par vos vraies images.
const images = [
  "/cuissine/m1.jpg",
  "/cuissine/m2.jpg",
  "/cuissine/m3.jpg",
  "/cuissine/m4.jpg",
  "/cuissine/m9.jpg",
  "/cuissine/m6.jpg",
  "/cuissine/m7.jpg",
  "/cuissine/m18.jpg",
  "/cuissine/m18.jpg",
  "/cuissine/m17.jpg",
  "/cuissine/m16.jpg",
  "/cuissine/m15.jpg",
  "/cuissine/m13.jpg",
  "/cuissine/m14.jpg",
  "/cuissine/m10.jpg",
  "/cuissine/m11.jpg",
];

export default function Menu() {
  return (
    <div>
      <Nav />
      <div className="text-3xl text-center font-bold mt-8">
        Bienvenu sur votre Menu
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 mt-10">
        {images.map((image, index) => (
          <div
            className="rounded-xl bg-slate-200 shadow-lg hover:shadow-xl transition-shadow"
            key={index}
          >
            <Link href={`/recette/${index + 1}`}>
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={image} // On utilise l'image actuelle du tableau
                  alt={`Recette ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Recette {index + 1}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
