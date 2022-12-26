import { Terbaik, Terlengkap, Terpercaya } from "../../public/svg";
const TerData = [
  {
    svg: <Terbaik />,
    title: "Terbaik",
    des: "Kami memiliki pengalaman lebih dari 25 tahun dalam bidang ini",
  },
  {
    svg: <Terlengkap />,
    title: "Terlengkap",
    des: "Kami telah melayani pesanan perorangan, tender, proyek dan toko-toko retail serta grosir",
  },
  {
    svg: <Terpercaya />,
    title: "Terpercaya",
    des: "Kami selalu menjaga dan memasarkan produkterlengkap dengan kualitas dan harga terbaik",
  },
];

const Recomend = () => {
  return (
    <div className="bg-white w-full h-fit flex flex-col items-center justify-center p-2 md:px-20 lg:px-44 py-14 gap-y-14">
      <div class="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 w-full">
        {TerData.map((a, o) => {
          return (
            <div
              key={o}
              className="group w-full flex flex-col items-center gap-y-4 p-2 border border-gray-300 hover:p-4 rounded-xl hover:scale-110 hover:border duration-500 "
            >
              <div className="flex gap-4 h-fit md:h-64 ">
                <div>{a.svg}</div>
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-bold">{a.title}</div>
                  <div className="text-2xl font-light">{a.des}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomend;
