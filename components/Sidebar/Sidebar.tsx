import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LineChartIcon,
  MenuIcon,
  ShoppingBag,
  AreaChart,
  Calendar,
  User2Icon,
  LockIcon,
  BarChart2,
  Component,
  Settings,
  Table2Icon,
  FormInputIcon,
  HomeIcon,
} from "lucide-react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/app/libs/utlis";
import MenuItem from "./MenuItem";
import LinkItem from "./LinkItem";
import ExpandMenu from "./ExpandMenu";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-black duration-300 ease-linear  dark:bg-boxdark lg:static lg:translate-x-0 `,
        {
          "w-70": isSidebarOpen,
        },
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="relative flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link className="flex items-center" href="/">
          <Image
            className="h-6 w-6 rounded-md"
            width={400}
            height={400}
            src={"/images/logo/logo-icon.png"}
            alt="Logo"
          />
          {isSidebarOpen && (
            <h1 className=" ml-2 text-xl font-semibold text-white">
              ShakibAdmin
            </h1>
          )}
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 py-4  lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul
              className={cn("mb-6 flex flex-col  gap-1.5", {
                "items-center justify-center": !isSidebarOpen,
              })}
            >
              {/* <!-- Menu Item Dashboard --> */}

              <MenuItem
                href="/"
                icon={<HomeIcon className="h-6 w-6 hover:text-white" />}
                title="Dashboard"
              >
                <LinkItem icon={<ShoppingBag />} title="E-commerce" href="/" />
                <LinkItem icon={<AreaChart />} title="SaaS" href="/saas" />
              </MenuItem>
              <ExpandMenu />
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              {/* <li>
                <MenuItem
                  title="Calendar"
                  href="/calendar"
                  icon={<Calendar className="h-6 w-6" />}
                ></MenuItem>
              </li> */}
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              {/* <li>
                <MenuItem
                  title="Profile"
                  href="/profile"
                  icon={<User2Icon className="h-6 w-6" />}
                ></MenuItem>
              </li> */}
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}
              {/* <li>
                <MenuItem
                  title="Form"
                  href="/forms"
                  icon={<FormInputIcon className="h-6 w-6" />}
                ></MenuItem>
              </li> */}
              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}
              {/* <li>
                <MenuItem
                  title="Tables"
                  href="/tables"
                  icon={<Table2Icon className="h-6 w-6" />}
                ></MenuItem>
              </li> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <MenuItem
                  title="Settings"
                  href="/settings"
                  icon={<Settings className="h-6 w-6" />}
                ></MenuItem>
              </li>

              {/* <!-- Menu Item Settings --> */}

              {/* <!-- Menu Item Chart --> */}
              <li>
                <MenuItem
                  title="Charts"
                  href="/charts"
                  icon={<BarChart2 className="h-6 w-6" />}
                ></MenuItem>
              </li>

              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Dropdown Menu Start --> */}
              <li>
                <MenuItem
                  title="UI"
                  href="/ui"
                  icon={<Component className="h-6 w-6" />}
                ></MenuItem>
              </li>

              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <li>
                <MenuItem
                  title="Authentication"
                  href="/auth"
                  icon={<LockIcon className="h-6 w-6" />}
                ></MenuItem>
              </li>

              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
