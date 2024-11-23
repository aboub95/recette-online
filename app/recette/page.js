import { people } from "../data";
import { getImageUrl } from "../utils";
import Image from "next/image";
import Nav from "../components/Navbar";
import Footer from "../components/Accueil/Footer";

export default function RecetteList() {
  return (
    <div className="w-full flex flex-col">
      <Nav />
      <div className="m-auto flex flex-col items-center">
        <h1 className="font-bold md:mt-10 mt-6 md:text-4xl text-2xl">
          Résultat de la recherche
        </h1>
        <div className="md:w-[380px] w-[250px] h-2 bg-[#F89249]"></div>
      </div>
      <div className="grid grid-cols-2 md:mt-8 mt-6 md:grid-cols-4 mb-10 md:gap-5 gap-3 md:w-[90%] max-sm:px-4 m-auto items-center">
        {people.map((person) => (
          <div key={person.id} className="recette-card">
            <div
              className="flex flex-col gap-4 bg-[#CCCCCC] rounded-lg pb-4 px-1 pt-1 items-center 
  shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="gap-3 flex items-center flex-col">
                <Image
                  src={getImageUrl(person)}
                  alt={person.name}
                  width={100}
                  height={200}
                  className="w-full "
                />
                <h3>{person.name}</h3>
              </div>
              <button className="bg-[#F89249] pl-1 px-2 rounded-lg text-white hover:bg-[#da8448]">
                {person.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// export default function List() {
//     const listItems = people.map(person =>
//       <li key={person.id}>
//         <img
//           src={getImageUrl(person)}
//           alt={person.name}
//         />
//         <p>
//           <b>{person.name}</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//         </p>
//       </li>
//     );
//     return <ul>{listItems}</ul>;
//   }
