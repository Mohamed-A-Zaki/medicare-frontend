import { Button } from "@mantine/core";
import Link from "next/link";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <Link href={"/login"}>
      <Button className={`!rounded-full !bg-primaryColor ${className}`}>
        login
      </Button>
    </Link>
  );
}
