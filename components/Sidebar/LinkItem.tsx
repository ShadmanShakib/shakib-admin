import React from "react";
import Link from "next/link";
import { useSidebar } from "./use-sidebar";

type Props = {
  icon?: React.ReactNode;
  title: string;
  href: string;
};

const LinkItem = (props: Props) => {
  const { title } = props;
  const isSidebarOpen = useSidebar((state) => state.isSidebarOpen);
  return (
    <Link
      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 `}
      href={props.href}
    >
      {props.icon}
      <p>{title}</p>
    </Link>
  );
};

export default LinkItem;
