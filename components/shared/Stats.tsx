import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  totalAnswers: number;
  totalQuestions: number;
}
interface StatsCardProps {
  imgUrl: string;
  title: string;
  value: number;
}
const StatsCard = ({ imgUrl, title, value }: StatsCardProps) => {
  return (
    <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-evenly gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200 ">
      <Image width={40} height={50} src={imgUrl} alt={title} />
      <div>
        <p className="paragraph-semibold text-dark200_light900 ">{value}</p>
        <p className="body-medium text-text-dark400_light700  ">{title}</p>
      </div>
    </div>
  );
};

const Stats = ({ totalAnswers, totalQuestions }: Props) => {
  return (
    <div className="mt-9">
      <h4 className="h3-semibold text-dark200_light900 ">Stats</h4>
      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-evenly gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200 ">
          <div>
            <p className="paragraph-semibold text-dark200_light900 ">
              {formatNumber(totalQuestions)}
            </p>
            <p className="body-medium text-text-dark400_light700  ">Question</p>
          </div>
          <div>
            <p className="paragraph-semibold text-dark200_light900 ">
              {formatNumber(totalAnswers)}
            </p>
            <p className="body-medium text-text-dark400_light700  ">Answers</p>
          </div>
        </div>
        <StatsCard
          imgUrl="/assets/icons/gold-medal.svg"
          value={0}
          title="Gold Badges"
        />
        <StatsCard
          imgUrl="/assets/icons/silver-medal.svg"
          value={0}
          title="Silver Badges"
        />
        <StatsCard
          imgUrl="/assets/icons/bronze-medal.svg"
          value={0}
          title="Bronze Badges"
        />
      </div>
    </div>
  );
};

export default Stats;
