import QuestionCard from "@/components/cards/QuestionCard";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import React from "react";
interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
const collection = async ({ searchParams }: SearchParamsProps) => {
  const { userId } = auth();
  if (!userId) return null;

  const result = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams.q,
    filter:searchParams.filter
  });

  const questions = result.questions;

  return (
    <>
      <h1 className=" h1-bold text-dark100_light900  ">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/collection"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions Here..."
          otherClasses="flex-1 "
        />
        <Filters
          otherClasses="min-h-[56px] min-w-[170px]"
          filters={QuestionFilters}
        />
      </div>

      <div className=" mt-10 flex flex-col w-full gap-6">
        {questions.length > 0 ? (
          questions.map((item: any) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
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

export default collection;
