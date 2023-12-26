import { Badge } from "lucide-react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="min-h-screen py-10">
      <div className="  rounded-md  bg-[#808080] bg-opacity-40 p-2">
        
        <h1 className="text-xl font-bold text-white">Rating</h1>
        <h1>17.9K</h1>
        <p className="bg-opaticity-60 flex items-center justify-center rounded-md bg-white px-2 text-center text-black">
          year of 2023
        </p>
      </div>
    </main>
  );
};

export default page;
