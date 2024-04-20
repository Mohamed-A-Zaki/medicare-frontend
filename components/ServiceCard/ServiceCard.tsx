import MainLink from "@/common/MainLink";
import IService from "@/types/service";
import { Group, Title } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCard({
  bgColor,
  desc,
  name,
  textColor,
  id,
}: IService) {
  return (
    <div className="p-2">
      <Title order={3} className="!font-normal">
        {name}
      </Title>

      <p className="text-gray-500 my-7"> {desc}</p>

      <Group justify="space-between">
        <MainLink href="#" />
        <div
          className={`w-8 h-8 flex items-center justify-center rounded`}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {id}
        </div>
      </Group>
    </div>
  );
}
