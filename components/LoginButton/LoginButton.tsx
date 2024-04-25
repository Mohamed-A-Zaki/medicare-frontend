import { Button } from "@mantine/core";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <Button className={`!rounded-full !bg-primaryColor ${className}`}>
      login
    </Button>
  );
}
