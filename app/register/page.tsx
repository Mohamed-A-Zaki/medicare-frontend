"use client";

import {
  Button,
  Container,
  FileInput,
  Image,
  Input,
  PasswordInput,
  Select,
  SimpleGrid,
  Title,
} from "@mantine/core";
import NextImage from "next/image";
import register_img from "@/assets/images/signup.gif";
import profilr_img from "@/assets/images/doctor-img01.png";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [role, setRole] = useState<string | null>("patient");
  const [gender, setGender] = useState<string | null>(null);

  return (
    <div className="my-20">
      <Container>
        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <div>
            <Image
              component={NextImage}
              alt="register_img"
              src={register_img}
              className="w-[500px] max-w-full !rounded-md"
            />
          </div>

          <div>
            <Title order={2}>
              Create an <span className="text-primaryColor">account</span>
            </Title>

            <div className="my-5">
              <Input type="text" placeholder="Full Name" />
            </div>

            <div className="my-5">
              <Input type="email" placeholder="Enter Your Email" />
            </div>

            <div className="my-5">
              <PasswordInput placeholder="Password" />
            </div>

            <div className="flex justify-between items-center my-5">
              <div className="flex items-center gap-3">
                <div className="font-semibold text-sm">Are you a</div>
                <Select
                  placeholder="Pick value"
                  data={["patient", "doctor"]}
                  value={role}
                  onChange={setRole}
                  className="w-[100px]"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="font-semibold text-sm">Gender</div>
                <Select
                  placeholder="Gender"
                  data={["male", "female"]}
                  value={gender}
                  onChange={setGender}
                  className="w-[100px]"
                />
              </div>
            </div>

            <div className="my-5 flex items-center gap-5">
         
                <Image
                  src={profilr_img}
                  alt="profile_img"
                  component={NextImage}
                  className="!w-[50px] !h-[50px] !rounded-full border-2 border-primaryColor cursor-pointer"
                />
           
              <div className="relative flex-1">
                <div className="absolute top-0 left-0 bg-purpleColor/50 p-3 rounded-md cursor-pointer mt-[-5px]">
                  upload photo
                </div>
                <FileInput className="opacity-0" />
              </div>
            </div>

            <Button
              className="!mb-5 !w-full !block !bg-primaryColor"
              type="submit"
            >
              signup
            </Button>

            <div className="text-textColor text-center">
              Already have an account?{" "}
              <Link href={"/login"} className="text-primaryColor">
                login
              </Link>
            </div>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
