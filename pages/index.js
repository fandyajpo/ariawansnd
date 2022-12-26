import Layout from "../components/Layout";
import Landing from "../components/Pages/Landing";
import Recomend from "../components/Pages/Recomend";
import Service from "../components/Pages/Service";
import Ter from "../components/Pages/Ter";
import Merk from "../components/Pages/Merk";
import MerkProduct from "../components/Pages/MerkProduct";
export default function Home() {
  return (
    <>
      <Landing />
      <Recomend />
      <Service />
      <Ter />

      <Merk />
      <MerkProduct />
    </>
  );
}

Home.layout = Layout;
