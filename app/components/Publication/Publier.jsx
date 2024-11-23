export function Publier() {
    return (
      <div className="w-full">
        <div className="w-full rounded-lg md:w-[90%] lg:w-[70%]">
          <form className="shadow-lg py-8 px-8 flex flex-col border border-[#F89249]  max-sm:w-full gap-6">
          <div className="flex flex-col items-center mb-3">
            <h1
              className="font-bold md:text-2xl text-xl"
              style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
            >
              Veuilles Publier une annonce{" "}
            </h1>
            {/* <h1
              className="font-bold text-2xl"
              style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
            >
              D’intégration
            </h1> */}
          </div>
          <div className="flex flex-col  gap-2">
              <label htmlFor="">Titre:</label>
              <input
                type="text"
                name="titre"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="">Image:</label>
              <input
                type="file"
                name="file"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Ingreédients:</label>
              <input
                type="text"
                name="ingrédients"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="">Description:</label>
              <input
                type="text"
                name="Description"
                required
                className="border border-[#F89249] pl-3"
                style={{ filter: "drop-shadow(0 2px 2px #F89249)" }}
              ></input>
            </div>
            <div className="m-auto">
            <button className="bg-[#F89249] text-base px-4 rounded-lg text-white">Publier</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  