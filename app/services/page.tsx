import ServicesList from "@/components/ServicesList";
import { Container } from "@mantine/core";

export default function Services() {
  return (
    <>
      <Container size={"lg"} className="py-24">
        <ServicesList />
      </Container>
    </>
  );
}
