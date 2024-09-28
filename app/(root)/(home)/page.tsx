import HomePageFilter from "@/components/Home/HomePageFilter";
import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const Home = () => {
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
    </>
  );
};

export default Home;
