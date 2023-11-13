"use client";
import React from "react";

import { AreaChart, SimpleBar } from "@/components/Charts";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import DataCard from "../Cards/DataCard";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <DataCard name="sales" amount={12699} />
        <DataCard name="orders" amount={34600} />
        <DataCard name="customers" amount={400} />
      </div>
      <div className="space-y-5 py-5">
        <AreaChart />
        <SimpleBar />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
