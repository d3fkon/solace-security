import Image from "next/image";
import React, { FC, ReactNode } from "react";
import logo from "../public/solace-icon.png";
import { navItems, NavItemType } from "../utils/nav-items";

const SidePanel = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start gap-4 mb-16">
        <Image src={logo} alt="solace logo" width={40} height={40} />
        <h2 className="font-semibold text-2xl">solace</h2>
      </div>
      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl md:text-left mb-12">
        your security center
      </h2>
      <nav className="">
        {navItems.map((navItem) => {
          return <NavItem key={navItem.route} data={navItem} />;
        })}
      </nav>
    </div>
  );
};

type NavItemProps = {
  children?: ReactNode;
  data: NavItemType;
};

const NavItem: FC<NavItemProps> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-4 py-8 border-b border-b-gray-800 cursor-pointer">
      <div className="h-6 w-6">{data.icon}</div>
      <p className="">{data.name}</p>
    </div>
  );
};

export default SidePanel;
