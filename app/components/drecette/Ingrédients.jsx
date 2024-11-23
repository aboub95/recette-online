import Image from "next/image";
export function Ingrédients() {
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto flex flex-col md:justify-center bg-[#E6E6E6] max-sm:px-3 md:px-4 lg:0px py-8 mt-3">
        <div className="flex flex-col md:pl-[90px] max-sm:px-4 max-sm:items-center gap-6">
          <div className="flex items-center  m-auto ">
            <Image
              src="../assets/recette1.svg"
              alt="Menu Burger"
              width={1000}
              height={1000}
              className={`w-[45px] h-[45x] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]`}
            />
            <h1 className="font-bold text-3xl md:text-4xl">Ingrédients</h1>
          </div>
          {/* Ingrédients sections */}
          <div className="flex flex-col gap-3">
            <div className="md:flex items-center flex max-sm:flex-col gap-8 md:gap-14">
              <Image
                src="../assets/recette2.svg"
                alt="Menu Burger"
                width={1000}
                height={1000}
                className={`w-[200px] h-[200x] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px]`}
              />
              <p className="max-sm:text-sm">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem <br></br> lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem <br></br>lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem <br></br> lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem <br></br>lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem{" "}
              </p>
            </div>
            <div className="md:flex items-center flex max-sm:flex-col gap-8 md:gap-14">
              <Image
                src="../assets/recette3.svg"
                alt="Menu Burger"
                width={1000}
                height={1000}
                className={`w-[200px] h-[200x] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px]`}
              />
              <p className="max-sm:text-sm">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem <br></br> lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem <br></br>lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem <br></br> lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem <br></br>lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem{" "}
              </p>
            </div>
            <div className="md:flex items-center flex max-sm:flex-col md:gap-14">
              <Image
                src="../assets/recette4.svg"
                alt="Menu Burger"
                width={1000}
                height={1000}
                className={`w-[200px] h-[200x] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px]`}
              />
              <p className="max-sm:text-sm">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem <br></br> lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem <br></br>lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem <br></br> lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem <br></br>lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem{" "}
              </p>
            </div>
            <div className="md:flex items-center flex max-sm:flex-col gap-8 md:gap-14">
              <Image
                src="../assets/recette5.svg"
                alt="Menu Burger"
                width={1000}
                height={1000}
                className={`w-[200px] h-[200x] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px]`}
              />
              <p className="max-sm:text-sm">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem <br></br> lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem <br></br>lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem <br></br> lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem <br></br>lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
