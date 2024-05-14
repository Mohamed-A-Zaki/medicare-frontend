import { Button, Input, Title } from "@mantine/core";
import Link from "next/link";

export default function Login() {
  return (
    <form className="shadow-md w-[500px] rounded-md p-5 my-20 mx-auto border">
      <Title order={2}>
        Hello! <span className="text-primaryColor">Welcome</span> Back
      </Title>

      <div className="my-5">
        <Input type="email" placeholder="Enter Your Email" />
      </div>
      

      <div className="my-5">
        <Input type="password" placeholder="Password" />
      </div>

      <Button className="!mb-5 !w-full !block !bg-primaryColor" type="submit">Login</Button>

      <div className="text-textColor text-center">
        Don&#39;t have an account?{" "}
        <Link href={"/register"} className="text-primaryColor">
          Register
        </Link>
      </div>
    </form>
  );
}
