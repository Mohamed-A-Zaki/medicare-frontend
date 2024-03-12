import NextImage from "next/image";
import { Group, Image, Stack } from "@mantine/core";

import imag1 from "@/assets/images/hero-img01.png";
import imag2 from "@/assets/images/hero-img02.png";
import imag3 from "@/assets/images/hero-img03.png";

export default function HeroRight() {
  return (
    <Group wrap="nowrap" align="start">
      <div>
        <Image src={imag1} alt="hero-img" component={NextImage} />
      </div>

      <Stack className="mt-4">
        <Image src={imag2} alt="hero-img" component={NextImage} />
        <Image src={imag3} alt="hero-img" component={NextImage} />
      </Stack>
    </Group>
  );
}
