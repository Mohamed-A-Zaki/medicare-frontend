import { doctors } from "@/assets/data/doctors";
import { SimpleGrid } from "@mantine/core";
import DoctorCard from "../DoctorCard";

export default function DoctorsList() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"xl"}>
      {doctors.map((doctor) => {
        return <DoctorCard key={doctor.id} {...doctor} />;
      })}
    </SimpleGrid>
  );
}
