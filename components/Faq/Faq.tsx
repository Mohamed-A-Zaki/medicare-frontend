import { Container, Image, SimpleGrid, Title } from "@mantine/core";
import faq from "@/assets/images/faq-img.png";
import NextImage from "next/image";
import FaqList from "../FaqList";

export default function Faq() {
  return (
    <section className="py-24">
      <Container size={"lg"}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} className="items-center">
          <div>
            <Image
              component={NextImage}
              src={faq}
              alt="faq_mg"
              className="w-[400px] max-w-full"
            />
          </div>
          <div>
            <Title order={2} className="!text-3xl">
              Most Questions by our beloved patients
            </Title>
            <FaqList />
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
