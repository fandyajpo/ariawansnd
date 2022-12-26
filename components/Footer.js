export default function Footer() {
  return (
    <>
      <div className="bg-[#2F1A1A]/50 w-full h-24 px-2  md:px-20 lg:px-44 flex items-center">
        <div>
          <p className="text-3xl font-bold">Contact us</p>
          <p>0361 429222E: atika.mandiri@yahoo.com</p>
        </div>
      </div>
      <div className="bg-[#2F1A1A]/20 w-full grid grid-rows-2 grid-flow-col gap-4 h-fit py-14 p-2 md:px-20 lg:px-44">
        <div>
          <p className="text-md font-bold">Services</p>
          <p className="text-md font-light hover:underline">NEWS</p>
          <p className="text-md font-light hover:underline">PRICE LIST</p>
        </div>
        <div>
          <p className="text-md font-bold">Help</p>
          <p className="text-md font-light hover:underline">
            TERMS AND CONDITIONS
          </p>
          <p className="text-md font-light hover:underline">PRIVACY POLICY</p>
          <p className="text-md font-light hover:underline">
            QUESTION AND ANSWER
          </p>
          <p className="text-md font-light hover:underline">MOBILE APPS</p>
        </div>
        <div>
          <p className="text-md font-bold">Follow Us</p>
          <p className="text-md font-light hover:underline">FACEBOOK</p>
          <p className="text-md font-light hover:underline">TWITTER</p>
          <p className="text-md font-light hover:underline">INSTAGRAM</p>
          <p className="text-md font-light hover:underline">YOUTUBE</p>
        </div>
      </div>
    </>
  );
}
