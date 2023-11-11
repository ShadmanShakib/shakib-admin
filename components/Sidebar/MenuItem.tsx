import React from "react";
import Link from "next/link";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { usePathname } from "next/navigation";
import { LineChartIcon } from "lucide-react";
import { cn } from "@/app/libs/utlis";
import { useSidebar } from "./use-sidebar";

export type Props = {
  title?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
};

function MenuItem(props: Props) {
  const { title } = props;
  const isSidebarOpen = useSidebar((state) => state.isSidebarOpen);
  return (
    <CollapsiblePrimitive.Root className="transform transition duration-100 ease-in-out">
      <CollapsiblePrimitive.Trigger className="group w-full group-hover:text-white">
        <button
          className={cn(
            "group relative flex items-center justify-center gap-2.5 rounded-md   px-3 py-2    font-medium text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4",
            {},
          )}
        >
          <div className="flex items-center justify-center">
            <div className="mr-2">{props.icon}</div>
            {
              <p
                className={cn(
                  "gorup-hover:block  text-lg group-hover:text-white",
                  {
                    hidden: !isSidebarOpen,
                  },
                )}
              >
                {title}
              </p>
            }
          </div>
        </button>
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.CollapsibleContent>
        <div className="ml-3">{isSidebarOpen && props.children}</div>
      </CollapsiblePrimitive.CollapsibleContent>
    </CollapsiblePrimitive.Root>
  );
}

export default MenuItem;

export const MenuItemChild = () => {};
