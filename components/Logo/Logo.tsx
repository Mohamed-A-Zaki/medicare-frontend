import Link from "next/link";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import logo from "@/assets/images/logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo-img"
        component={NextImage}
        className="!w-32"
      />
    </Link>
  );
}
