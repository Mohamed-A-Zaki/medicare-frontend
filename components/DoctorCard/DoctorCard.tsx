import MainLink from "@/common/MainLink";
import IDoctor from "@/types/doctor";
import { Group, Image, Title } from "@mantine/core";
import NextImage from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa6";

export default function DoctorCard({
  id,
  hospital,
  name,
  avgRating,
  photo,
  specialty,
  totalPatients,
  totalRating,
}: IDoctor) {
  return (
    <div className="p-2">
      <Image component={NextImage} src={photo} alt={name} />
      <Title order={3} className="!my-3">
        {name}
      </Title>

      <Group justify="space-between">
        <div className="px-3 py-2 text-irisBlueColor bg-irisBlueColor/25 w-fit rounded text-sm">
          {specialty}
        </div>

        <Group className="text-sm" gap={5}>
          <FaStar className="text-yellowColor" />
          <div>{avgRating}</div>
          <div>({totalRating})</div>
        </Group>
      </Group>

      <Group justify="space-between" className="mt-3">
        <div>
          <div className="font-semibold">+ {totalPatients} patents</div>
          <div className="text-sm text-textColor">At {hospital}</div>
        </div>

        <MainLink href="#" />
      </Group>
    </div>
  );
}
