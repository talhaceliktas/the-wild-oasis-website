import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { CabinProps } from "@/types";

const Cabin = ({ cabin }: CabinProps) => {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="border-primary-800 mb-24 grid grid-rows-[3fr_4fr] gap-10 border pb-4 md:grid-cols-[3fr_4fr] md:grid-rows-1 md:gap-20 md:px-10 md:py-3 md:pb-0">
      <div className="relative md:-translate-x-3 md:scale-[1.15]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-accent-100 bg-primary-950 mb-5 px-3 pb-1 text-5xl font-black md:w-[150%] md:translate-x-[-254px] md:p-6 md:text-7xl">
          Cabin {name}
        </h3>

        <p className="text-primary-300 md-10 mb-6 px-3 text-lg md:mb-0 md:px-0">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-6 px-3 md:gap-4 md:px-0">
          <li className="flex items-center gap-3">
            <UsersIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">For up to {maxCapacity} guests</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabin;
