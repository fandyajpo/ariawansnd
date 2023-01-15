import Data from "../../data/tool.json";
import Layout from "../../components/Layout";
import Image from "next/image";
import Recomend from "../../components/Pages/Recomend";
const Query = () => {
  return (
    <>
      <div className="bg-white w-full h-fit flex flex-col md:flex-row items-center justify-evenly px-2 md:px-20 lg:px-44 py-14 gap-y-14">
        <Image
          src={Data[0].productImage}
          alt={"Gambar"}
          width={200}
          height={200}
        />
        <div className="border p-6 rounded-xl w-full md:w-96">
          <p className="pb-4 border-b mb-4 font-bold">Kran Wastafel</p>
          <div>
            <p>- Kondisi : Baru</p>
            <p>- Berat Satuan : 375g</p>
            <p>- Kategori : Keran Air</p>
            <p>- Etalase : ONDA</p>
            <p>- Tipe : Djer7</p>
          </div>
          <p className="font-bold py-2">IDR 135.000</p>
          <div className="flex flex-col gap-4">
            <button className="p-3 rounded-xl bg-green-500 text-white border">
              Masukkan Keranjang
            </button>
            <button className="p-3 rounded-xl bg-white text-green-500 border border-green-599">
              Beli
            </button>
          </div>
        </div>
      </div>
      <Recomend />
    </>
  );
};

Query.layout = Layout;
export default Query;
