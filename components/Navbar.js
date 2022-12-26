import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../public/logo.png";
import Image from "next/image";
import { SearchSVG, CartSVG, Navigation } from "../public/svg";
import { useCallback, useRef, useState } from "react";
const Navbar = () => {
  const refer = useRef();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const sOpen = useCallback(() => {
    setOpen((f) => !f);
  }, [open]);

  return (
    <div className="bg-white h-24 flex flex-col md:flex-row items-center gap-x-8 justify-between md:px-44 shadow-md">
      <div className="flex flex-row items-center gap-x-8 w-full px-4">
        <div>
          <Image src={Logo} alt={"Test"} className="w-36 h-24" />
        </div>
        <div className="relative w-full">
          <input className="py-2 pl-10 pr-2 border border-gray-300 rounded-xl outline-none w-full" />
          {/* <div> */}
          <SearchSVG className={"w-6 h-6 absolute top-2.5 left-2"} />
          {/* </div> */}
        </div>
        <button
          onClick={sOpen}
          className="block md:hidden border p-2 rounded-xl"
        >
          <Navigation />
        </button>
      </div>

      <div
        style={{
          height: open ? refer.current.scrollHeight + 5 : 0,
        }}
        ref={refer}
        className="flex flex-col md:flex-row items-start w-full md:w-fit h-full  md:h-fit gap-4 md:overscroll-none md:divide-x md:p-0 md:divide-gray-300 overflow-hidden md:overflow-visible bg-white md:bg-transparent md:items-center absolute md:relative top-24 md:top-auto duration-500 ease-out"
      >
        <Link
          href={"/"}
          className={`${router.pathname === "/" ? "" : ""} relative pl-2`}
        >
          <CartSVG className={"w-6 h-6"} />
          <div
            className={`rounded-full ${
              router.pathname === "/" ? "h-1 bg-blue-700" : "h-0 bg-white"
            } duration-200`}
          />
        </Link>
        <Link
          href={"/menu"}
          className={`${router.pathname === "/menu" ? "" : ""} relative pl-2`}
        >
          Berita
          <div
            className={`rounded-full ${
              router.pathname === "/menu" ? "h-1 bg-blue-700" : "h-0 bg-white"
            } duration-200`}
          />
        </Link>

        <Link
          href={"/help"}
          className={`${router.pathname === "/help" ? "" : ""} relative pl-2`}
        >
          Contact
          <div
            className={`rounded-full ${
              router.pathname === "/help" ? "h-1 bg-blue-700" : "h-0 bg-white"
            } duration-200`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
