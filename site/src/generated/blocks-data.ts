
import React from "react";
import { Login01 } from "@/blocks/application/auth/login01";
import { Login02 } from "@/blocks/application/auth/login02";
import { Login03 } from "@/blocks/application/auth/login03";
import { Signup01 } from "@/blocks/application/auth/signup01";
import { Otp01 } from "@/blocks/application/auth/otp01";
import { Kpi01 } from "@/blocks/application/dash-card/kpi01";
import { Kpi02 } from "@/blocks/application/dash-card/kpi02";
import { Kpi03 } from "@/blocks/application/dash-card/kpi03";
import { Activity01 } from "@/blocks/application/dash-card/activity01";
import { EmptyState01 } from "@/blocks/application/empty-state/empty-state01";
import { Header01 } from "@/blocks/application/header/header01";
import { Header02 } from "@/blocks/application/header/header02";
import { Header03 } from "@/blocks/application/header/header03";
import { Sidebar01 } from "@/blocks/application/sidebar/01/sidebar01";
import { Sidebar02 } from "@/blocks/application/sidebar/02/sidebar02";
import { Sidebar03 } from "@/blocks/application/sidebar/03/sidebar03";
import { Sidebar04 } from "@/blocks/application/sidebar/04/sidebar04";
import { Sidebar05 } from "@/blocks/application/sidebar/05/sidebar05";
import { Shell01 } from "@/blocks/application/app-shell/shell01";
import { Table01 } from "@/blocks/application/table/table01";
import { Table02 } from "@/blocks/application/table/table02";
import { Table03 } from "@/blocks/application/table/table03";
import { Hero01 } from "@/blocks/marketing/hero/hero01";
import { Hero02 } from "@/blocks/marketing/hero/hero02";
import { Hero03 } from "@/blocks/marketing/hero/hero03";
import { Features01 } from "@/blocks/marketing/features/features01";
import { Content01 } from "@/blocks/marketing/content/content01";
import { Content02 } from "@/blocks/marketing/content/content02";
import { Pricing01 } from "@/blocks/marketing/pricing/pricing01";
import { Pricing02 } from "@/blocks/marketing/pricing/pricing02";
import { Pricing03 } from "@/blocks/marketing/pricing/pricing03";


export interface BlockSource {
  name: string;
  path: string;
  Component: React.ComponentType<unknown>;
}

export const blocksSourceData:BlockSource[] = [
  {
    name: "login01",
    path: "login01",
    Component: Login01,
  },
  {
    name: "login02",
    path: "login02",
    Component: Login02,
  },
  {
    name: "login03",
    path: "login03",
    Component: Login03,
  },
  {
    name: "signup01",
    path: "signup01",
    Component: Signup01,
  },
  {
    name: "otp01",
    path: "otp01",
    Component: Otp01,
  },
  {
    name: "kpi01",
    path: "kpi01",
    Component: Kpi01,
  },
  {
    name: "kpi02",
    path: "kpi02",
    Component: Kpi02,
  },
  {
    name: "kpi03",
    path: "kpi03",
    Component: Kpi03,
  },
  {
    name: "activity01",
    path: "activity01",
    Component: Activity01,
  },
  {
    name: "empty-state01",
    path: "empty-state01",
    Component: EmptyState01,
  },
  {
    name: "header01",
    path: "header01",
    Component: Header01,
  },
  {
    name: "header02",
    path: "header02",
    Component: Header02,
  },
  {
    name: "header03",
    path: "header03",
    Component: Header03,
  },
  {
    name: "sidebar01",
    path: "sidebar01",
    Component: Sidebar01,
  },
  {
    name: "sidebar02",
    path: "sidebar02",
    Component: Sidebar02,
  },
  {
    name: "sidebar03",
    path: "sidebar03",
    Component: Sidebar03,
  },
  {
    name: "sidebar04",
    path: "sidebar04",
    Component: Sidebar04,
  },
  {
    name: "sidebar05",
    path: "sidebar05",
    Component: Sidebar05,
  },
  {
    name: "shell01",
    path: "shell01",
    Component: Shell01,
  },
  {
    name: "table01",
    path: "table01",
    Component: Table01,
  },
  {
    name: "table02",
    path: "table02",
    Component: Table02,
  },
  {
    name: "table03",
    path: "table03",
    Component: Table03,
  },
  {
    name: "hero01",
    path: "hero01",
    Component: Hero01,
  },
  {
    name: "hero02",
    path: "hero02",
    Component: Hero02,
  },
  {
    name: "hero03",
    path: "hero03",
    Component: Hero03,
  },
  {
    name: "features01",
    path: "features01",
    Component: Features01,
  },
  {
    name: "content01",
    path: "content01",
    Component: Content01,
  },
  {
    name: "content02",
    path: "content02",
    Component: Content02,
  },
  {
    name: "pricing01",
    path: "pricing01",
    Component: Pricing01,
  },
  {
    name: "pricing02",
    path: "pricing02",
    Component: Pricing02,
  },
  {
    name: "pricing03",
    path: "pricing03",
    Component: Pricing03,
  },

];

export type BlockName = typeof blocksSourceData[number]["name"];
