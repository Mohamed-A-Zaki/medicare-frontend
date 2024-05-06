import { Button, Input, Title } from "@mantine/core";

export default function FindDoctor() {
  return (
    <div className="text-center py-24 bg-[#fff9ea]">
      <Title order={2} className="!mb-5">
        Find a Doctor
      </Title>
      <form>
        <div className="w-[500px] max-w-full flex m-auto">
          <Input type="search" placeholder="Search Doctor" className="flex-1" />
          <Button className="text-white !bg-primaryColor !rounded-s-none">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
