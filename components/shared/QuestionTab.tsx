import { getUserQuestion } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import QuestionCard from "../cards/QuestionCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionTab = async ({ searchProps, userId, clerkId }: Props) => {
  const result = await getUserQuestion({
    userId,
    page: 1,
  });

  return (
    <>
      {result.question.map((item) => (
        <QuestionCard
          key={item._id}
          _id={item._id}
          clerkId={clerkId}
          title={item.title}
          tags={item.tags}
          author={item.author}
          upvotes={item.upvotes}
          views={item.views}
          answers={item.answers}
          createdAt={item.createdAt}
        />
      ))}
    </>
  );
};

export default QuestionTab;
