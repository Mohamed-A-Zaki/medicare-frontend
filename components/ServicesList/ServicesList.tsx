import { SimpleGrid } from "@mantine/core";
import { services } from "@/assets/data/services";
import ServiceCard from "../ServiceCard";

export default function ServicesList() {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing={"xl"}>
      {services.map((service) => {
        return <ServiceCard key={service.id} {...service} />;
      })}
    </SimpleGrid>
  );
}
