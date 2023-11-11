"use client";
import React from "react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
import s from "./style.module.css";
type Props = {};

const ExpandMenu = (props: Props) => {
  return (
    <Collapsible className="transform transition duration-150 ease-linear">
      <CollapsibleTrigger>Dashboard</CollapsibleTrigger>
      <CollapsibleContent className={s.CollapsibleContent}>
        <p>Content</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandMenu;
