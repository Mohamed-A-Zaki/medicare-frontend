import SectionHeading from "@/common/SectionHeading";
import { Container } from "@mantine/core";
import DoctorsList from "../../components/DoctorsList";

export default function Doctors() {
  return (
    <section className="py-24">
      <Container size={"lg"}>
        <SectionHeading
          title="Our Greet Doctors"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae cum iste maiores nulla accusantium."
        />
        <DoctorsList />
      </Container>
    </section>
  );
}
