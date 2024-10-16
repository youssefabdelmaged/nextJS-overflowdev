import QuestionCard from "@/components/cards/QuestionCard";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { IQuestion } from "@/database/question.model";
import { getQuestionsByTAgId } from "@/lib/actions/tag.action";
import { URLProps } from "@/types";
import React from "react";

const TagId = async ({ params, searchParams }: URLProps) => {
  const result = await getQuestionsByTAgId({
    tagId: params.id,
    page: 1,
    searchQuery: searchParams.q,
  });

  return (
    <>
      <h1 className=" h1-bold text-dark100_light900 ">{result.tagTitle}</h1>

      <div className="mt-11 w-full ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Tags Here..."
          otherClasses="flex-1 "
        />
      </div>

      <div className=" mt-10 flex flex-col w-full gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((item: IQuestion) => (
            <QuestionCard
              // @ts-ignore
              key={item._id}
              // @ts-ignore
              _id={item._id}
              title={item.title}
              // @ts-ignore
              tags={item.tags}
              // @ts-ignore
              author={item.author}
              // @ts-ignore
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no saved questions to show"
            desc=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
             discussion. our query could be the next big thing others learn from. Get
             involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default TagId;
