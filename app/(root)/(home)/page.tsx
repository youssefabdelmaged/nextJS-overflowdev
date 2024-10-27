import QuestionCard from "@/components/cards/QuestionCard";
import HomePageFilter from "@/components/Home/HomePageFilter";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import {
  getQuestions,
  getRecommendedQuestions,
} from "@/lib/actions/question.action";
import Link from "next/link";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
  description: "Dev Overflow is a community of 1,000,000+ developers. Join us",
};
interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
const Home = async ({ searchParams }: SearchParamsProps) => {
  let result;
  const { userId } = auth();
  if (searchParams?.filter === "recommended") {
    if (userId) {
      result = await getRecommendedQuestions({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        questions: [],
        isNext: false,
      };
    }
  } else {
    result = await getQuestions({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

 
  const questions = result.questions;

  return (
    <>
      <div className="flex flex-col-reverse justify-between w-full sm:flex-row sm:items-center gap-4">
        <h1 className=" h1-bold text-dark100_light900  ">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
          <Button className="primary-gradient !text-light-900 px-4 py-3 min-h-[46px]">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions Here..."
          otherClasses="flex-1 "
        />
        <Filters
          containerClasses="hidden max-md:flex "
          otherClasses="min-h-[56px] min-w-[170px]"
          filters={HomePageFilters}
        />
      </div>
      <HomePageFilter />

      <div className=" mt-10 flex flex-col w-full gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
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
            title="There is no question to show"
            desc=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
                   discussion. our query could be the next big thing others learn from. Get
                   involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Home;
