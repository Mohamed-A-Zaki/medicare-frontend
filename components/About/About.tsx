import about_img from "@/assets/images/about.png";
import about_card from "@/assets/images/about-card.png";
import { Button, Container, Image, SimpleGrid, Title } from "@mantine/core";
import NextImage from "next/image";

export default function About() {
  return (
    <section>
      <Container size={"lg"}>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <div className="relative">
            <Image
              src={about_img}
              alt="about-img"
              component={NextImage}
              className="!w-[400px]"
            />
            <Image
              src={about_card}
              alt="about-card"
              component={NextImage}
              className="!w-[350px] absolute bottom-10 -right-5"
            />
          </div>

          <div>
            <Title order={2} className="!text-4xl">
              Proud to be one of thenations best
            </Title>
            <p className="text-gray-500 my-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam minima quo harum, magnam optio accusamus, architecto
              exercitationem eos, deserunt autem maxime delectus vitae possimus?
              Unde quo suscipit ea recusandae?
            </p>
            <p className="text-gray-500 my-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam minima quo harum, magnam optio accusamus, architecto
              exercitationem eos, deserunt autem maxime delectus vitae possimus?
              Unde quo suscipit ea recusandae?
            </p>

            <Button className="!rounded-full !bg-primaryColor">
              learn more
            </Button>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
