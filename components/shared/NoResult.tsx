import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  desc: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, desc, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex flex-col w-full items-center  justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        className="block object-contain dark:hidden"
        width={270}
        height={200}
        alt="no result"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        className="hidden object-contain dark:flex"
        width={270}
        height={200}
        alt="no result"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title} </h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {desc}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900 ">
          {linkTitle}{" "}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
