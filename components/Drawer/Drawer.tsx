"use client";

import { open_drawer_atom } from "@/atoms/open_drawer_atom";
import { Drawer as MantineDrawer } from "@mantine/core";
import LoginButton from "../LoginButton";
import NavLinks from "../NavLinks";

export default function Drawer() {
  const opened = open_drawer_atom.use("opened");

  return (
    <MantineDrawer
      opened={opened}
      onClose={open_drawer_atom.close}
      position="right"
    >
      <NavLinks className="!flex-col" />
      <LoginButton className="!w-full mt-3" />
    </MantineDrawer>
  );
}
