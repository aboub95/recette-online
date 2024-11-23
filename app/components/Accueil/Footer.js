import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      {/* Conteneur principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="cursor-pointer mb-4 md:mb-0">
            <Image
              src="/cuissine/Frame 29.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </Link>

        {/* Texte de droits et liens légaux */}
        <div className="text-center md:text-left text-sm space-y-2 md:space-y-0 md:space-x-6">
          <p className="inline-block">
            © 2024 Délice’olive. Tous droits réservés.
          </p>
          <Link href="/politique-de-confidentialite">
            <p className="inline-block hover:underline">
              Politique de confidentialité
            </p>
          </Link>
          <Link href="/conditions-generales">
            <p className="inline-block hover:underline">Conditions générales</p>
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://www.facebook.com/" passHref>
            <div className="cursor-pointer">
              <Image
                src="/cuissine/faceb.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href="/cuissine/Insta.png" passHref>
            <div className="cursor-pointer">
              <Image
                src="/cuissine/Insta.png"
                alt="Instagram"
                width={70}
                height={70}
              />
            </div>
          </Link>
          <Link href="https://www.twitter.com/" passHref>
            <div className="cursor-pointer">
              <Image
                src="/cuissine/piteres.png"
                alt="Twitter"
                width={30}
                height={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
