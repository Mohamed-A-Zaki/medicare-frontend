"use client";

import Link from "next/link";
import { Group } from "@mantine/core";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    link: "/",
    text: "Home",
  },
  {
    id: 2,
    link: "/doctors",
    text: "Find A Doctor",
  },
  {
    id: 3,
    link: "/services",
    text: "Services",
  },
  {
    id: 4,
    link: "/contact",
    text: "Contact",
  },
];

export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Group gap={"xl"} className={className}>
      {links.map(({ id, link, text }) => {
        return (
          <Link
            key={id}
            href={link}
            className={`font-medium text-textColor hover:text-primaryColor ${
              pathname === link ? "!text-primaryColor" : ""
            }`}
          >
            {text}
          </Link>
        );
      })}
    </Group>
  );
}
