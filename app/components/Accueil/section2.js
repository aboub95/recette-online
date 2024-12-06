import { Video } from "./video";
import { Video2 } from "./video2";
import { Video3 } from "./video3";

export default function Section2() {
  return (
    <section className="min-h-screen bg-white max-sm:ml-10 lg:ml-64">
      <h1 className="text-center text-3xl font-bold mt-24 px-4">
        Des vidéos pour vous aider en cuisine
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-10">
        {/* Vidéo 1 */}
        <div className="rounded-lg bg-gray-100 shadow-lg p-4">
          <Video />
          <p className="mt-4 text-center text-lg font-semibold">
            Brochet de viande
          </p>
        </div>

        {/* Vidéo 2 */}
        <div className="rounded-lg bg-gray-100 shadow-lg p-4 w-full">
          <Video2 />
          <p className="mt-4 text-center text-lg font-semibold">
            Dessert gourmand
          </p>
        </div>

        {/* Vidéo 3 */}
        <div className="rounded-lg bg-gray-100 shadow-lg p-4">
          <Video3 />
          <p className="mt-4 text-center text-lg font-semibold">
            Plat végétarien
          </p>
        </div>
      </div>
    </section>
  );
}
