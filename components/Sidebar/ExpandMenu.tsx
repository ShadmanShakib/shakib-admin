"use client";
import React from "react";
import { ChevronRight, HomeIcon } from "lucide-react";
import { cn } from "@/app/libs/utlis";
import LinkItem from "./LinkItem";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
import s from "./style.module.css";
import { useSidebar } from "./use-sidebar";
type Props = {
  children?: React.ReactNode;
};

const ExpandMenu = (props: Props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const { isSidebarOpen } = useSidebar((state) => state);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="">
      <CollapsibleTrigger asChild className="group rounded-sm px-3 py-2  ">
        {isSidebarOpen ? (
          <div className="flex w-full items-center ">
            <HomeIcon className="  h-6 w-6 hover:text-white" />
            <div
              className={cn(
                "flex w-full transform items-center justify-between duration-300 ease-in",
              )}
            >
              <p className={cn("ml-2 text-lg group-hover:text-white ", {})}>
                Dashboards
              </p>
              <ChevronRight
                className={cn(
                  "ml-2 h-4 w-4 transform  duration-300 ease-in-out group-hover:rotate-90 ",
                  {
                    "rotate-90": open,
                  },
                )}
              />
            </div>
          </div>
        ) : (
          <LinkItem
            title="Home"
            href="/"
            icon={<HomeIcon className="h-6 w-6" />}
          ></LinkItem>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className={s.CollapsibleContent}>
        <div className="px-3">{isSidebarOpen && children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandMenu;
