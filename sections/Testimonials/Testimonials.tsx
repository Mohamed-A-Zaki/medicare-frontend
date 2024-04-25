"use client";

import SectionHeading from "@/common/SectionHeading";
import { Carousel } from "@mantine/carousel";
import { Container, Group, Image, Rating } from "@mantine/core";
import NextImage from "next/image";
import client_img from "@/assets/images/patient-avatar.png";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mohamed Zaki",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam maxime, voluptate magni voluptas odit repellat.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mohamed Zaki",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam maxime, voluptate magni voluptas odit repellat.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mohamed Zaki",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam maxime, voluptate magni voluptas odit repellat.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mohamed Zaki",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam maxime, voluptate magni voluptas odit repellat.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <Container size={"lg"}>
        <SectionHeading
          title={"What our patient say"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae cum iste maiores nulla accusantium."
          }
        />

        <Carousel
          withIndicators
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="center"
          slidesToScroll={3}
        >
          {data.map(({ id, name, rating, desc }) => {
            return (
              <Carousel.Slide key={id} className="p-2">
                <Group>
                  <Image
                    component={NextImage}
                    src={client_img}
                    alt={"client_img"}
                  />

                  <div>
                    <div className="font-semibold">{name}</div>
                    <Rating defaultValue={rating} readOnly />
                  </div>
                </Group>
                <p className="text-textColor text-sm mt-3">{desc}</p>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
