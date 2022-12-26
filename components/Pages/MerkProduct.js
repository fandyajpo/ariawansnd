import Image from "next/image";

const ProductMerk = [
  {
    title: "Pipa Maspion",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728667075649556/image.png",
  },
  {
    title: "West Pex",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728758092046367/image.png",
  },
  {
    title: "Langgeng",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728811904962610/image.png",
  },
  {
    title: "Pipa & Fitting Rucika",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728846583472209/image.png",
  },
  {
    title: "Maspion Electronik",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056729026514911262/image.png",
  },
  {
    title: "Profil Tank",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056729088800333894/image.png",
  },
  {
    title: "Onda",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728877906534521/image.png",
  },
  {
    title: "Kitz",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728901528866916/image.png",
  },
  {
    title: "Sika",
    img: "https://cdn.discordapp.com/attachments/1055060226858029076/1056728937746665622/image.png",
  },
];

const MerkProduct = () => {
  return (
    <div className="bg-white w-full h-fit flex items-center justify-center p-2 md:px-44 py-14">
      <div class="grid grid-cols-2 grid-flow-row gap-4 w-full">
        {ProductMerk.map((a, i) => {
          return (
            <div
              key={i}
              className="group w-full h-80  flex flex-col items-center gap-y-4 p-2 border-2 border-[#2F1A1A]/20 hover:scale-110 duration-500"
            >
              <div className="text-left">
                <Image
                  alt={a.title}
                  src={a.img}
                  width={200}
                  height={200}
                  className="w-52 h-52 border"
                />
                <p className="text-xl font-bold py-2">{a.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MerkProduct;
