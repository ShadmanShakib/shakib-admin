import React from "react";
import Link from "next/link";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { usePathname } from "next/navigation";
import { LineChartIcon } from "lucide-react";
import { useSidebar } from "./use-sidebar";

export type Props = {
  title?: string;
  children?: React.ReactNode;
};

function MenuItem(props: Props) {
  const { title } = props;
  const isSidebarOpen = useSidebar((state) => state.isSidebarOpen);
  return (
    <CollapsiblePrimitive.Root className="transform transition duration-100 ease-in-out">
      <CollapsiblePrimitive.Trigger className="w-full hover:bg-graydark">
        <button
          className={`group relative flex  items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4  `}
        >
          <LineChartIcon />
          {isSidebarOpen && <p>{title}</p>}
        </button>
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.CollapsibleContent>
        {props.children}
      </CollapsiblePrimitive.CollapsibleContent>
    </CollapsiblePrimitive.Root>
  );
}

export default MenuItem;

export const MenuItemChild = () => {};
