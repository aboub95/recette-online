"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="h-24 w-full bg-black  top-0 flex justify-between items-center px-5 z-10">
        <div>
          <Link href="/">
            <Image
              src="/cuissine/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="h-16 w-16 rounded-full p-2"
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-around items-center h-20 w-8/12 bg-black">
          <Link href="/">
            <ul className="mr-5 hover:text-gray-300 text-white text-lg md:text-xl lg:text-2xl">
              Accueil
            </ul>
          </Link>
          <Link href="/recette">
            <ul className="mr-5 hover:text-gray-300 text-white text-lg md:text-xl lg:text-2xl">
              Recettes
            </ul>
          </Link>
          <Link href="/Menu">
            <ul className="mr-5 hover:text-gray-300 text-white text-lg md:text-xl lg:text-2xl">
              Menu
            </ul>
          </Link>
          <Link href="/inscription">
            <ul className="mr-5 hover:text-gray-300 text-white text-lg md:text-xl lg:text-2xl">
              Contact
            </ul>
          </Link>
        </div>

        <Link href="/Connexion">
          <button className="hidden md:block mr-5 hover:text-gray-300 text-white bg-orange-500 h-12 md:h-14 w-28 md:w-36 text-lg md:text-xl lg:text-2xl rounded-3xl">
            Connexion
          </button>
        </Link>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* L'icon de mon menbu beurgeur */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* J'appelle mon Menu beurgeur ici pour la version mobile */}

      {isOpen && (
        <div className="md:hidden bg-black text-white p-5">
          <Link href="/">
            <ul className="mb-4 hover:bg-cyan-600  hover:scale-105 transition duration-150text-gray-300 text-lg">
              Accueil
            </ul>
          </Link>
          <Link href="/recette">
            <ul className="mb-4 hover:bg-cyan-600  hover:scale-105 transition duration-150 text-gray-300 text-lg">
              Recettes
            </ul>
          </Link>
          <Link href="/Menu">
            <ul className="mb-4  hover:bg-cyan-600  hover:scale-105 transition duration-150text-gray-300 text-lg">
              Menu
            </ul>
          </Link>
          <Link href="/inscription">
            <ul className=" hover:bg-cyan-600  hover:scale-105 transition duration-150text-gray-300 text-lg">
              Contact
            </ul>
          </Link>
        </div>
      )}
    </div>
  );
}
