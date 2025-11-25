"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavigationLink({ children, href }) {
  const pathname = usePathname();
  const navLinks = {
    "/select/movie": {
      activeStyle: "bg-bright-yellow text-dark-blue",
      hoverStyle: "hover:bg-bright-yellow hover:text-dark-blue",
    },
    "/select/anime": {
      activeStyle: "bg-main-red text-white",
      hoverStyle: "hover:bg-main-red hover:text-white",
    },
    "/select/tv": {
      activeStyle: "bg-light-blue text-dark-blue",
      hoverStyle: "hover:bg-light-blue hover:text-dark-blue",
    },
  };

  const styleToApply = navLinks[href] ?? {
    activeStyle: "",
    hoverStyle: "",
  };

  return (
    <Link
      href={href}
      className={`p-3 rounded-md font-bold transition-all duration-200 ease-in ${
        styleToApply.hoverStyle
      } ${pathname === href ? `${styleToApply.activeStyle}` : ""}`}
    >
      {children}
    </Link>
  );
}
