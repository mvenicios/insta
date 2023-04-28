import Image from "next/image";
import React from "react";
import VidaSnap from "../src/app/images/vidasnaplogo.png";

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
        <h1>Right side</h1>
      </div>
      {/*Middle*/}
      {/*Right*/}
    </>
  );
}
