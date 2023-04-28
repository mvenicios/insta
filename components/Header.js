import Image from "next/image";
import React from "react";
import VidaSnap from "../src/app/images/vidasnaplogo.png";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <>
      {/*Left*/}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-26 relative hidden lg:inline-grid">
          <Image
            width="200"
            height="80"
            src={VidaSnap}
            className="object-contain"
          />
        </div>

        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            width="80"
            height="80"
            src="https://play-lh.googleusercontent.com/dmyJVZ5BKcOFM6XaZmTgZjtsHnvj3PqCaxTnuOSwu6HN7a7J3k_aR-023K01L_RTcsI=w600-h300-pc0xffffff-pd"
            className="object-contain"
          />
        </div>
        {/*Middle*/}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Procurar..."
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        {/*Right*/}
        <h1>Right side</h1>
      </div>
    </>
  );
}
