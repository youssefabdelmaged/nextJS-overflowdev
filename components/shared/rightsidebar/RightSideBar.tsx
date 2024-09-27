import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "../RenderTags";

const hotQuestions = [
  {
    _id: 1,
    title:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam.  ",
  },
  {
    _id: 2,
    title:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam.  ",
  },
  {
    _id: 3,
    title:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam.  ",
  },
  {
    _id: 4,
    title:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam.  ",
  },
  {
    _id: 5,
    title:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam.  ",
  },
];

const popularTags = [
  {
    _id: 1,
    name: "react",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "next",
    totalQuestions: 5,
  },
  {
    _id: 3,
    name: "js",
    totalQuestions: 5,
  },
  {
    _id: 4,
    name: "redux",
    totalQuestions: 5,
  },
  {
    _id: 5,
    name: "vue",
    totalQuestions: 5,
  },
];
const RightSideBar = () => {
  return (
    <section
      className="sticky top-0 right-0  h-screen 
     flex flex-col 
     overflow-y-auto  
     p-6 pt-36 light-border custom-scrollbar
     dark:shadow-none shadow-light-300 
     background-light900_dark200 w-[350px] max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900"> Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((q) => (
            <Link
              key={q._id}
              href={`/questions/${q._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="bode-medium text-dark500_light700">{q.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900"> Top Questions</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
