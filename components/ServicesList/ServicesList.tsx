import { SimpleGrid } from "@mantine/core";
import { services } from "@/assets/data/services";
import ServiceCard from "../ServiceCard";

export default function ServicesList() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"xl"}>
      {services.map((service) => {
        return <ServiceCard key={service.id} {...service} />;
      })}
    </SimpleGrid>
  );
}
