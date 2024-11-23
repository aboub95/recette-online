export function Connexion() {
    return (
      <div className="w-full">
        <div className="w-full rounded-lg md:w-[90%] lg:w-[70%]">
          <form className="shadow-lg py-8 px-8 flex flex-col border max-sm:w-full gap-6">
          <div className="flex flex-col items-center mb-3">
            <h1
              className="font-bold md:text-2xl text-xl"
              style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
            >
              Connectez-vous{" "}
            </h1>
            <h1
              className="font-bold text-2xl"
              style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
            >
            </h1>
          </div>
          {/* <div className="flex flex-col  gap-2">
              <label htmlFor="">Nom et prénom:</label>
              <input
                type="text"
                name="nom et prénom"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div> */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="">e-mail:</label>
              <input
                type="mail"
                name="mail"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            {/* <div className="flex flex-col gap-2">
              <label htmlFor="">Numéro de téléphone:</label>
              <input
                type="number"
                name="number"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div> */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="">Mot de passe:</label>
              <input
                type="text"
                name="Mot de passe"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            <div className="m-auto">
            <button className="bg-[#F89249] text-base px-4 rounded-lg text-white">Soumettre</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  