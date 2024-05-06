import { doctors } from "@/assets/data/doctors";
import { SimpleGrid } from "@mantine/core";
import DoctorCard from "../DoctorCard";

export default function DoctorsList({ lg }: { lg: 3 | 4 }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: lg }} spacing={"xl"}>
      {doctors.map((doctor) => {
        return <DoctorCard key={doctor.id} {...doctor} />;
      })}
    </SimpleGrid>
  );
}
