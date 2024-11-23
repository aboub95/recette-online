"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function Inscrit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      setMessage("Email invalide ou mot de passe trop court (min. 6 caractères).");
      return;
    }

    setLoading(true);
    setMessage(""); // Réinitialise le message

    try {
      const response = await fetch(
        "https://cuisine-recipes.onrender.com/api/registrer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, number, password }),
        }
      );

      if (response.ok) {
        setMessage("Inscription réussie !");
        setName(""); // Réinitialise les champs
        setEmail("");
        setNumber("");
        setPassword("");
        alert("Inscription réussie ! Vous allez être redirigé."); // Affiche une alerte
        setTimeout(() => router.push("/connexion"), 1500); // Redirige après 1.5 secondes
      } else {
        const errorText = await response.text();
        setMessage(`Erreur : ${errorText}`);
      }
    } catch (error) {
      setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-lg md:w-[90%] lg:w-[70%]">
        <form
          onSubmit={submit}
          className="shadow-lg py-8 px-8 flex flex-col border border-[#F89249] max-sm:w-full gap-6"
        >
          <div className="flex flex-col items-center mb-3">
            <h1 className="font-bold md:text-2xl text-xl">Bienvenue sur Formulaire</h1>
            <h1 className="font-bold text-2xl">D’intégration</h1>
          </div>
          {message && <p className="text-red-500">{message}</p>}
          <div className="flex flex-col gap-2">
            <label>Nom et prénom:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#F89249] pl-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>e-mail:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#F89249] pl-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Numéro de téléphone:</label>
            <input
              type="text"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-[#F89249] pl-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Mot de passe:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#F89249] pl-3"
            />
          </div>
          <div className="m-auto">
            <button
              type="submit"
              className={`text-base px-4 rounded-lg text-white ${
                loading ? "bg-gray-500" : "bg-[#F89249]"
              }`}
              disabled={loading}
            >
              {loading ? "Chargement..." : "Inscrire"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
