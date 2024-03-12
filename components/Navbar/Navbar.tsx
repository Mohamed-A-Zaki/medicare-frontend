import Logo from "../Logo";
import NavLinks from "../NavLinks";
import LoginButton from "../LoginButton";
import { Container, Group } from "@mantine/core";

export default function Navbar() {
  return (
    <nav className="bg-[url('../assets/images/mask.png')] bg-no-repeat bg-cover py-4 sticky top-0 bg-white">
      <Container size={"lg"}>
        <Group justify="space-between">
          <Logo />
          <NavLinks />
          <LoginButton />
        </Group>
      </Container>
    </nav>
  );
}
