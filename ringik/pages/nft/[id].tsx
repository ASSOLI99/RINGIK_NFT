import Image from "next/image";
import React from "react";
import LufftyImage from "../../public/LuffyG5.jpg";
import OnePiece from "../../public/onePiece.webp";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
function NFTDropPage() {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  //---
  console.log(address);
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left side */}
      <div className="bg-gradient-to-br flex items-center justify-center  from-cyan-800 to-rose-500  lg:h-screen lg:col-span-4">
        <div className="flex flex-col p-1 justify-center items-center">
          <div className="flex ">
            <div className="p-1 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600">
              <div className="relative  h-48 w-32 lg:h-72 lg:w-44 ">
                <Image
                  src={LufftyImage}
                  alt="luffy gear five"
                  fill
                  className="rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl pt-3 text-white font-bold">NFT Test</h1>
          <h2 className="text-white py-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            harum?
          </h2>
        </div>
      </div>
      {/* right side */}
      <div className=" lg:col-span-6 flex flex-1 flex-col p-12">
        {/* header */}
        <header className="flex justify-between items-center text-left">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              RINGIK
            </span>{" "}
            NFT Market
          </h1>
          {address ? (
            <button
              onClick={() => disconnect()}
              className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => connectWithMetamask()}
              className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            >
              Sign In
            </button>
          )}
        </header>
        <hr className="my-2" />
        {address && (
          <p className="text center w-100 text-sm text-red-600">
            You logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* body */}
        <div className="w-full flex flex-col justify-center items-center h-full">
          <div className="w-80 lg:w-2/3 h-60 relative my-3">
            <Image
              src={OnePiece}
              alt="luffy gear five"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2 className="text-2xl text-center font-bold lg:text-4xl lg:font-extrabold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            corporis.
          </h2>
          <p className="pt-3 text-green-500">13/21 NFT's claimed</p>
          <button className="h-16 w-full rounded-full bg-red-600 text-white mt-10 font-bold">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </div>
  );
}

export default NFTDropPage;
