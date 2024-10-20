"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");
  console.log(query);

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });

        router.push(newUrl, { scroll: false });
      }else{
        if(pathname === route){
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            key: ['q'],
          })
          router.push(newUrl, { scroll: false });

        }
      }
    }, 300);


    return () => clearTimeout(delayDebounceFn)
  }, [search, pathname, query, searchParams, route, router]);

  return (
    <div
      className={`background-light800_darkgradient 
                      flex min-h-[56px] grow items-center 
                      rounded-[10px]  gap-4 px-4   ${otherClasses} `}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer "
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer "
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
