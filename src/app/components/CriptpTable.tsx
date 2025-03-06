"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CryptoData {
  id: string;
  pair: string;
  lastPrice: string;
  priceInRp: string;
  change24h: string;
  isPositive: boolean;
  high24h: string;
  highInRp: string;
  marketCap: string;
  volume24h: string;
  favorite: boolean;
}

export default function CryptoTable() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    {
      id: "1",
      pair: "BTC/DAI",
      lastPrice: "98,832.93",
      priceInRp: "1,612,213,281.72",
      change24h: "+3.89%",
      isPositive: true,
      high24h: "102,451.34",
      highInRp: "94,288.07",
      marketCap: "31,953.008T",
      volume24h: "1.538M",
      favorite: true,
    },
    {
      id: "2",
      pair: "ETH/DAI",
      lastPrice: "98,832.93",
      priceInRp: "1,612,213,281.72",
      change24h: "+3.89%",
      isPositive: true,
      high24h: "102,451.34",
      highInRp: "94,288.07",
      marketCap: "31,953.008T",
      volume24h: "1.538M",
      favorite: false,
    },
    {
      id: "3",
      pair: "XRP/ETH",
      lastPrice: "98,832.93",
      priceInRp: "1,612,213,281.72",
      change24h: "-3.89%",
      isPositive: false,
      high24h: "102,451.34",
      highInRp: "94,288.07",
      marketCap: "31,953.008T",
      volume24h: "1.538M",
      favorite: false,
    },
    {
      id: "4",
      pair: "BTC/DAI",
      lastPrice: "98,832.93",
      priceInRp: "1,612,213,281.72",
      change24h: "+3.89%",
      isPositive: true,
      high24h: "102,451.34",
      highInRp: "94,288.07",
      marketCap: "31,953.008T",
      volume24h: "1.538M",
      favorite: false,
    },
    {
      id: "5",
      pair: "BTC/DAI",
      lastPrice: "98,832.93",
      priceInRp: "1,612,213,281.72",
      change24h: "+3.89%",
      isPositive: true,
      high24h: "102,451.34",
      highInRp: "94,288.07",
      marketCap: "31,953.008T",
      volume24h: "1.538M",
      favorite: false,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setCryptoData(
      cryptoData.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div className="w-full overflow-auto -ml-2   text-white  ">
      <div className="hidden lg:block">
        <Table>
          <TableHeader>
            <TableRow className="border-b-[1px]  border-[#121B2E]">
              <TableHead className="text-white  py-6  font-medium">
                <div className="flex  gap-3">
                  <p>Pasangan</p>
                  <img src="./arrow.png" alt="arrow"></img>{" "}
                </div>
              </TableHead>
              <TableHead className="text-white  py-6  w-fit font-medium ">
                <div className="flex md:justify-end gap-3">
                  <p>Harga Terakhir</p>
                  <img src="./arrow.png" alt="arrow"></img>
                </div>
              </TableHead>
              <TableHead className="text-white  py-6  font-medium ">
                <div className="flex md:justify-end gap-3">
                  <p> Perubahan 24 jam</p>
                  <img src="./arrow.png" alt="arrow"></img>
                </div>
              </TableHead>
              <TableHead className="text-white  py-6   font-medium ">
                <div className="flex md:justify-end gap-3">
                  <p>Tertinggi / Terendah 24 jam</p>
                  <img src="./arrow.png" alt="arrow"></img>
                </div>{" "}
              </TableHead>
              <TableHead className="text-white  py-6  font-medium ">
                <div className="flex md:justify-end gap-3">
                  <p>Kapitalisasi Pasar</p>
                  <img src="./arrow.png" alt="arrow"></img>
                </div>
              </TableHead>
              <TableHead className="text-white  py-6  font-medium ">
                <div className="flex md:justify-end gap-3">
                  <p>Volume 24 Jam</p>
                  <img src="./arrow.png" alt="arrow"></img>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cryptoData.map((crypto) => (
              <TableRow
                key={crypto.id}
                className="border-b-[1px]  border-[#121B2E] text-white">
                <TableCell className="font-medium">
                  <div className="flex items-center  gap-4">
                    <button onClick={() => toggleFavorite(crypto.id)}>
                      {crypto.favorite ? (
                        <img src="./star.png" className="h-8 w-8 " />
                      ) : (
                        <img src="./white-star.png" className="h-8 w-8 " />
                      )}
                    </button>
                    <span>{crypto.pair}</span>
                  </div>
                </TableCell>
                <TableCell className="py-6 ">
                  <div className="flex gap-1 justify-end ">
                    <span>{crypto.lastPrice}</span>
                    <span>/</span>
                    <span className=" ">Rp {crypto.priceInRp}</span>
                  </div>
                </TableCell>
                <TableCell className={`   py-6 `}>
                  <div
                    className={`flex justify-end ${
                      crypto.isPositive ? "text-red-500" : "text-green-500"
                    }`}>
                    {crypto.change24h}
                  </div>
                </TableCell>
                <TableCell className="py-6">
                  <div className="flex gap-1 justify-end  ">
                    <span>{crypto.high24h}</span>
                    <span>/</span>
                    <span className=" ">Rp {crypto.highInRp}</span>
                  </div>
                </TableCell>
                <TableCell className="py-6 ">
                  <div className="flex justify-end">Rp {crypto.marketCap}</div>
                </TableCell>
                <TableCell className="py-6  ">
                  <div className="flex justify-end">{crypto.volume24h}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden space-y-4">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className=" p-3 rounded-lg  border-b-[1px]  border-[#121B2E]">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-4">
                <button onClick={() => toggleFavorite(crypto.id)}>
                  {crypto.favorite ? (
                    <img src="./star.png" className="h-8 w-8 " />
                  ) : (
                    <img src="./white-star.png" className="h-8 w-8 t" />
                  )}
                </button>
                <span className="font-medium">{crypto.pair}</span>
              </div>
              <span
                className={`${
                  crypto.isPositive ? "text-green-500" : "text-red-500"
                }`}>
                {crypto.change24h}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="">Harga Terakhir</p>
                <div className="flex text-gray-400 flex-wrap gap-1">
                  <p>{crypto.lastPrice}</p>
                  <span>/</span>
                  <p className=" ">Rp {crypto.priceInRp}</p>
                </div>
              </div>
              <div>
                <p className="text-white">Tertinggi / Terendah 24jam</p>
                <div className="flex text-gray-400 gap-1 flex-wrap">
                  <p>{crypto.high24h}</p>
                  <span>/</span>
                  <p className=" ">Rp {crypto.highInRp}</p>
                </div>
              </div>
              <div>
                <p className="">Kapitalisasi Pasar</p>
                <p className="text-gray-400">Rp {crypto.marketCap}</p>
              </div>
              <div>
                <p className="">Volume 24 Jam</p>
                <p className="text-gray-400">{crypto.volume24h}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
