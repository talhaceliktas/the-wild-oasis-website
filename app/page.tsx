import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-52 md:mt-24">
      <Image
        src={bg}
        fill
        alt="Mountains and forests with two cabins"
        placeholder="blur"
        className="object-cover object-top"
        quality={80}
      />

      <div className="relative z-10 text-center">
        <h1 className="text-primary-50 mb-10 text-4xl font-normal tracking-tight md:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-6 text-lg font-semibold transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
