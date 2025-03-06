import CryptoCard from "../components/CharHero";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-white pt-28 min-h-screen px-5 xl:px-7 bg-gradient-to-b flex justify-center from-5% to-95% from-[#000000]  to-[#010C28]  w-full">
        <div className="container min-h-screen    mx-2 pt-10   flex flex-col gap-6">
          <CryptoCard />
          <Table />
        </div>
      </div>
    </>
  );
}
