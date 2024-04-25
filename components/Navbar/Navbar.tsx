"use client";

import Logo from "../Logo";
import NavLinks from "../NavLinks";
import LoginButton from "../LoginButton";
import { Container, Group } from "@mantine/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { open_drawer_atom } from "@/atoms/open_drawer_atom";
import Drawer from "@/components/Drawer";

export default function Navbar() {
  return (
    <nav className="bg-[url('../assets/images/mask.png')] bg-no-repeat bg-cover py-4 sticky top-0 bg-white">
      <Container size={"lg"}>
        <Group justify="space-between">
          <Logo />

          <NavLinks className="!hidden md:!flex" />
          <LoginButton className="!hidden md:!block" />

          <GiHamburgerMenu
            className="cursor-pointer md:hidden"
            onClick={open_drawer_atom.open}
          />

          <Drawer />
        </Group>
      </Container>
    </nav>
  );
}
