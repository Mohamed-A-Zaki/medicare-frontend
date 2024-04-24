import { Container, Title } from "@mantine/core";
import ServicesList from "../../components/ServicesList";
import SectionHeading from "@/common/SectionHeading";

export default function Services() {
  return (
    <section className="py-24">
      <Container size={"lg"}>
        <SectionHeading
          title="Our medical services"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae cum iste maiores nulla accusantium."
        />

        <ServicesList />
      </Container>
    </section>
  );
}
