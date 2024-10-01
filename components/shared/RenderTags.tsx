import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}
const RenderTags = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex justify-between items-center gap-2 "
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 px-4 py-2 rounded-md uppercase border-none ">{name}</Badge>
  {showCount &&
  
      <p className="small-medium text-dark500_ligth700">{totalQuestions}</p>
  }
    </Link>
  );
};

export default RenderTags;
