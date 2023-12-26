import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chart Page | Next.js E-commerce Dashboard Template",
  description: "This is Chart Page for TailAdmin Next.js",
  // other metadata
};
type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <div>{props.children}</div>;
};
export default layout;
