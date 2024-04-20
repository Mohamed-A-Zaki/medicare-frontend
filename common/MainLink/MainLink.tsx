import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export type MainLinkProps = {
  href: string;
};
export default function MainLink({ href }: MainLinkProps) {
  return (
    <Link href={href}>
      <FaArrowRight className="m-auto w-8 h-8 border border-black rounded-full p-2 cursor-pointer hover:bg-primaryColor hover:text-white hover:border-primaryColor transition duration-300" />
    </Link>
  );
}
