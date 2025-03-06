"use client";

const CharHero = () => {
  const num = [1, 2];
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-4xl font-semibold">Pasar</h1>
        <p className="text-white text-sm">
          Pasar Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </div>
      {/* End Header */}

      {/* Crypto Card */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-6 w-full  items-center    justify-between  ">
        {/* red char */}
        {num.map((_, index) => (
          <div
            key={index}
            className="bg-[#050913] items-center  shadow-2xl flex gap-8 py-7 h-40 justify-between max-w-[28rem] sm:max-w-[26rem] text-white  px-5  rounded-lg ">
            <div className=" flex flex-col justify-between h-full gap-3">
              <p className="text-xs ">TKO/IDR</p>
              <h2 className="text-lg font-semibold">Rp 5,261.3</h2>
              <p className="text-[#FF3B3B] text-sm">-3.82%</p>
            </div>
            <div className="  flex justify-between h-full items-center    flex-col ">
              <div className="">
                <img src="./red-chart.png" className="w-40" alt="" />
              </div>
              <p className="text-xs text-[#959595] font-semibold mt-2">
                Volume: 2,258 IDR
              </p>
            </div>
          </div>
        ))}
        {/* end red char */}

        {/* green char */}
        {num.map((_, index) => (
          <div
            key={index}
            className="bg-[#050913] items-center  shadow-2xl flex gap-8 py-7 h-40 justify-between max-w-[28rem] sm:max-w-[26rem] text-white  px-5  rounded-lg ">
            <div className=" flex flex-col justify-between h-full gap-3">
              <p className="text-xs ">TKO/IDR</p>
              <h2 className="text-lg font-semibold">Rp 5,261.3</h2>
              <p className="text-[#6EDC86] text-sm">+3.82%</p>
            </div>
            <div className="  h-full flex justify-between items-center    flex-col ">
              <div className="">
                <img src="./green-chart.png" className="w-40" alt="" />
              </div>
              <p className="text-xs text-[#959595] font-semibold  mt-2">
                Volume: 2,258 IDR
              </p>
            </div>
          </div>
        ))}
        {/* end green char */}
      </div>
      {/* End Crypto Card */}
    </div>
  );
};

export default CharHero;
