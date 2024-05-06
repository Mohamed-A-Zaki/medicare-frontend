import DoctorsList from "@/components/DoctorsList";
import FindDoctor from "@/sections/FindDoctor";
import Testimonials from "@/sections/Testimonials";
import { Container } from "@mantine/core";

export default function Doctors() {
  return (
    <>
      <FindDoctor />

      <Container size={"lg"} className="pt-20">
        <DoctorsList lg={4} />
      </Container>

      <Testimonials />
    </>
  );
}
