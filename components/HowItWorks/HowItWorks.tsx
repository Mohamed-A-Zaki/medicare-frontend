import NextImage from "next/image";
import { Container, Image, SimpleGrid, Title } from "@mantine/core";

import imag1 from "@/assets/images/icon01.png";
import imag2 from "@/assets/images/icon02.png";
import imag3 from "@/assets/images/icon03.png";

import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "@/common/SectionHeading";
import MainLink from "@/common/MainLink";

export default function HowItWorks() {
  return (
    <section className="py-24 text-center">
      <Container size={"lg"}>
        <SectionHeading
          title="Providing the best medical services"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae cum iste maiores nulla accusantium."
        />

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
          <div>
            <Image
              className="w-[200px] h-[150px] !object-contain m-auto"
              src={imag1}
              component={NextImage}
              alt="services-img"
            />
            <Title order={3} className="!mt-5">
              Find a Doctor
            </Title>
            <p className="text-gray-500 my-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              incidunt cupiditate delectus, voluptatibus a dolorem rerum omnis
              dolorum architecto officia.
            </p>

            <MainLink href="#" />
          </div>
          <div>
            <Image
              className="w-[200px] h-[150px] !object-contain m-auto"
              src={imag2}
              component={NextImage}
              alt="services-img"
            />
            <Title order={3} className="!mt-5">
              Find a Location
            </Title>
            <p className="text-gray-500 my-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              incidunt cupiditate delectus, voluptatibus a dolorem rerum omnis
              dolorum architecto officia.
            </p>
            <MainLink href="#" />
          </div>
          <div>
            <Image
              className="w-[200px] h-[150px] !object-contain m-auto"
              src={imag3}
              component={NextImage}
              alt="services-img"
            />
            <Title order={3} className="!mt-5">
              Book Appointment
            </Title>
            <p className="text-gray-500 my-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              incidunt cupiditate delectus, voluptatibus a dolorem rerum omnis
              dolorum architecto officia.
            </p>
            <MainLink href="#" />
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
