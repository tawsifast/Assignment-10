"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Briefcase,
  House,
  Person,
  LayoutCellsLarge,
  Bookmark,
  FileText,
  CreditCard,
  Persons,
  Display,
  MagnifierPlus,
  Calendar,
  PlusShape,
} from "@gravity-ui/icons";

const adminNavItems = [
  { icon: LayoutCellsLarge, href: "/dashboard/admin", label: "Dashboard" },
  { icon: Persons, href: "/dashboard/admin/all-users", label: "Users" },
  {
    icon: Display,
    href: "/dashboard/admin/all-properties",
    label: "Properties",
  },
  { icon: Briefcase, href: "/dashboard/admin/all-bookings", label: "Bookings" },
  {
    icon: CreditCard,
    href: "/dashboard/admin/transactions",
    label: "Transactions",
  },
];

const ownerNavLinks = [
  { icon: MagnifierPlus, href: "/dashboard/owner/overview", label: "Overview" },
  {icon: PlusShape,href: "/dashboard/owner/add-properties",label: "Add Property"},
  { icon: House, href: "/dashboard/owner/my-properties", label: "My Property" },
  { icon: Calendar, href: "/dashboard/owner/bookings", label: "Bookings" },
  { icon: Person, href: "/dashboard/owner/profile", label: "Profile" },
];

const tenantNavLinks = [
  { icon: Briefcase, href: "/dashboard/tenant/overview", label: "Overview" },
  { icon: Bookmark, href: "/dashboard/tenant/bookings", label: "My Bookings" },
  { icon: FileText, href: "/dashboard/tenant/favourites", label: "Favourite" },
  { icon: CreditCard, href: "/dashboard/tenant/profile", label: "Profile" },
];

const navLinksMap = {
  tenant: tenantNavLinks,
  owner: ownerNavLinks,
  admin: adminNavItems,
};

export function SidebarLinks({ role }) {
  const pathname = usePathname();
  const items = navLinksMap[role] || tenantNavLinks;

  // Clean the current pathname by stripping out trailing slashes
  const currentPath = pathname?.replace(/\/$/, "") || "";

  return (
    <nav className="flex flex-col gap-1.5 w-full">
      {items.map((item) => {
        const targetPath = item.href.replace(/\/$/, "");

        // Base paths (like dashboard roots) need exact matching.
        // Sub-pages can match deep paths smoothly.
        const isBaseDashboard =
          targetPath === "/dashboard/admin" ||
          targetPath === "/dashboard/owner/overview" ||
          targetPath === "/dashboard/tenant/overview";

        const isActive = isBaseDashboard
          ? currentPath === targetPath
          : currentPath.startsWith(targetPath);

        const IconComponent = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
              isActive
                ? "bg-purple-500/10 border-purple-500/30 text-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                : "text-slate-200 border-transparent hover:bg-white/4 hover:border-purple-500/20 hover:text-white" // Dark-mode ready neutrals
            }`}
          >
            <IconComponent
              className={`size-5 ${
                isActive ? "text-white" : "text-neutral-400"
              }`}
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
