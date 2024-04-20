import { Title } from "@mantine/core";

export type SectionHeadingProps = {
  title: string;
  description: string;
};
export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="sm:w-96 m-auto text-center">
      <Title order={2} className="!text-4xl">
        {title}
      </Title>
      <p className="text-gray-500 my-7 text-sm">{description}</p>
    </div>
  );
}
