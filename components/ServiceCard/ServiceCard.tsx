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
        <FaArrowRight className="w-8 h-8 border border-black rounded-full p-2 cursor-pointer hover:bg-primaryColor hover:text-white hover:border-primaryColor transition duration-300" />
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
