import { Button, SimpleGrid, Title } from "@mantine/core";

const stats = [
  {
    id: 1,
    title: "30+",
    description: "Years of experience",
    color: "bg-yellowColor",
  },
  {
    title: "15+",
    description: "Clinic Location",
    color: "bg-purpleColor",
  },
  {
    title: "100%",
    description: "Patient Satisfaction",
    color: "bg-irisBlueColor",
  },
];

export default function HeroLeft() {
  return (
    <div>
      <Title order={1} className="!text-6xl !font-normal">
        We help patients live a healthy, longer life.
      </Title>
      <p className="text-gray-500 my-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsam
        quam soluta quia similique a dolores expedita consequuntur itaque
        consectetur libero accusamus est corrupti natus cupiditate porro unde,
        corporis veniam.
      </p>

      <Button className="!rounded-full !bg-primaryColor">
        Request an Appointment
      </Button>

      <SimpleGrid className="mt-7" cols={{ base: 2, sm: 3, md: 2, lg: 3 }}>
        {stats.map(({ id, color, title, description }) => {
          return (
            <div key={id}>
              <div className="text-5xl font-medium">{title}</div>
              <div
                className={`h-[7px] rounded-md mt-[-7px] w-24 ${color}`}
              ></div>
              <span className="block text-gray-500 mt-4 text-sm">
                {description}
              </span>
            </div>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
