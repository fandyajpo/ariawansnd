import Layout from "../../components/Layout";
import Data from "../../data/tool.json";
import Image from "next/image";
const Cart = () => {
  return (
    <>
      <div className="bg-white w-full h-fit flex flex-col md:flex-row justify-evenly px-2 md:px-20 lg:px-44 py-14 gap-y-14">
        <div className="flex flex-col gap-4 w-full md:w-2/4">
          <div className="flex flex-col md:flex-row border p-4 gap-6 rounded-xl w-full">
            <Image
              src={Data[0].productImage}
              alt={"Gambar"}
              width={200}
              height={200}
            />
            <div>
              <p>- Kondisi : Baru</p>
              <p>- Berat Satuan : 375g</p>
              <p>- Kategori : Keran Air</p>
              <p>- Etalase : ONDA</p>
              <p>- Tipe : Djer7</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border p-4 gap-6 rounded-xl w-full">
            <Image
              src={Data[0].productImage}
              alt={"Gambar"}
              width={200}
              height={200}
            />
            <div>
              <p>- Kondisi : Baru</p>
              <p>- Berat Satuan : 375g</p>
              <p>- Kategori : Keran Air</p>
              <p>- Etalase : ONDA</p>
              <p>- Tipe : Djer7</p>
            </div>
          </div>
        </div>
        <div className="border p-6 rounded-xl w-full md:w-96">
          <p className="pb-4 border-b mb-4 font-bold">Grand Total</p>
          <div>
            <p className="font-bold py-2">IDR 135.000</p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="p-3 rounded-xl bg-green-500 text-white border">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Cart.layout = Layout;
export default Cart;
