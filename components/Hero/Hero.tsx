import HeroLeft from "../HeroLeft";
import HeroRight from "../HeroRight";
import { Container, SimpleGrid } from "@mantine/core";

export default function Hero() {
  return (
    <section className="bg-[url('../assets/images/hero-bg.png')] bg-no-repeat bg-cover">
      <Container size={"lg"} className="py-24">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <HeroLeft />
          <HeroRight />
        </SimpleGrid>
      </Container>
    </section>
  );
}
