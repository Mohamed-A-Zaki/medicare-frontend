import { Container, Title } from "@mantine/core";
import ServicesList from "../ServicesList";

export default function Services() {
  return (
    <section className="py-24">
      <Container size={"lg"}>
        <div className="w-96 m-auto text-center">
          <Title order={2} className="!text-4xl">
            Our medical services
          </Title>
          <p className="text-gray-500 my-7 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            vitae cum iste maiores nulla accusantium.
          </p>
        </div>

        <ServicesList />
      </Container>
    </section>
  );
}
