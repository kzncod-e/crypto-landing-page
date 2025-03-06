"use client";
import React from "react";
import { useState } from "react";
import CryptoTable from "./CriptpTable";

const data = [
  {
    name: "IDR",
  },
  {
    name: "USD",
  },
  {
    name: "BNB",
  },
  {
    name: "BTC",
  },
  {
    name: "ALTS",
  },
];
const Table = () => {
  const [column, setColumn] = useState("IDR");
  return (
    <div className="flex mt-8    gap-5 flex-col">
      {/* header */}
      <div className="flex gap-6  sm:gap-20">
        <div className="">
          <h1 className="text-3xl font-bold">Favorit </h1>
        </div>
        <div className="flex text-[#BCBCBC] flex-wrap font-bold gap-16 text-lg">
          {data.map((item) => (
            <div
              className={`flex hover:text-white items-center flex-col cursor-pointer ${
                column === item.name && "text-[#D57C17]"
              }`}
              onClick={() => setColumn(item.name)}
              key={item.name}>
              {item.name}
              {column === item.name && (
                <div className="h-1 w-10  bg-[#D57C17] mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* end header */}
      <CryptoTable />
    </div>
  );
};

export default Table;
