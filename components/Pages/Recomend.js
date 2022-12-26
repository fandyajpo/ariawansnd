import Data from "../../data/tool.json";
import Image from "next/image";

const Recomend = () => {
  return (
    <div className="bg-white w-full h-fit flex flex-col items-center justify-center px-2 md:px-44 py-14 gap-y-14">
      <p className="text-4xl font-bold">Rekomendasi</p>
      <div class="grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-6 w-full">
        {Data.map((a, o) => {
          return (
            <div
              key={o}
              className="group w-full h-80  flex flex-col items-center gap-y-4 p-2 border-2 border-[#2F1A1A]/20 rounded-xl"
            >
              <div className="text-left">
                <Image
                  alt={a.id}
                  src={a.productImage}
                  width={200}
                  height={200}
                  className="w-52 h-52"
                />
                <p className="text-xl font-bold">{a.productName}</p>
                <p className="text-xl font-light">IDR {a.productPrice}</p>
              </div>
              <div>
                <button className="bg-blue-500 p-2 w-72 rounded-xl text-white text-xl group-hover:bg-blue-700 duration-500">
                  Add to order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomend;
