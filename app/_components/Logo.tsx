import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

      <Image
        src={logo}
        height={60}
        width={60}
        alt="The Wild Oasis logo"
        quality={100}
        placeholder="blur"
      />
      <span className="text-primary-100 cursor-pointer text-xl font-semibold">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
