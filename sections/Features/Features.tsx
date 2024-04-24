import { Button, Container, Image, SimpleGrid, Title } from "@mantine/core";
import NextImage from "next/image";
import feature_img from "@/assets/images/feature-img.png";

export default function Features() {
  return (
    <section>
      <Container size={"lg"}>
        <SimpleGrid cols={{ base: 1, lg: 2 }} className="items-center">
          <div>
            <Title order={2}>Get virtual treatment any time</Title>

            <ul className="text-gray-500 my-7">
              <li className="my-2">1 - Lorem ipsum dolor sit amet.</li>
              <li className="my-2">
                2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </li>
              <li className="my-2">
                3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Beatae perspiciatis commodi rem.
              </li>
            </ul>

            <Button className="!rounded-full !bg-primaryColor">
              learn More
            </Button>
          </div>

          <div>
            <Image
              component={NextImage}
              src={feature_img}
              alt="feature-img"
              className="!w-[400px] m-auto"
            />
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
