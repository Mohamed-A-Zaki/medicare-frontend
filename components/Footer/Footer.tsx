"use client";

import { Container, Grid, Group, Stack, Title } from "@mantine/core";
import Logo from "../Logo";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="pb-20">
      <Container size={"lg"}>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <div>
              <Logo />
              <p className="text-textColor text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                facilis?
              </p>
              <Group className="mt-3">
                <FaYoutube className="p-2 border border-black w-8 h-8 rounded-full cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300" />
                <FaGithub className="p-2 border border-black w-8 h-8 rounded-full cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300" />
                <FaInstagram className="p-2 border border-black w-8 h-8 rounded-full cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300" />
                <FaLinkedin className="p-2 border border-black w-8 h-8 rounded-full cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300" />
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <div>
              <Title order={4}>Quick Links</Title>
              <Stack className="!mt-3">
                <Link
                  href={"/"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href={"/about-us"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  About us
                </Link>
                <Link
                  href={"/services"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href={"/blog"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Blog
                </Link>
              </Stack>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <div>
              <Title order={4}>I want to:</Title>
              <Stack className="!mt-3">
                <Link
                  href={"/"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Find a Doctor
                </Link>
                <Link
                  href={"/about-us"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Request an Appointment
                </Link>
                <Link
                  href={"/services"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Find a Location
                </Link>
                <Link
                  href={"/blog"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Get an Opinion
                </Link>
              </Stack>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <div>
              <Title order={4}>Support</Title>
              <Stack className="!mt-3">
                <Link
                  href={"/"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Donate
                </Link>
                <Link
                  href={"/about-us"}
                  className="hover:text-primaryColor transition duration-300"
                >
                  Contact us
                </Link>
              </Stack>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
