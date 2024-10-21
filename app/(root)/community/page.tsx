import UserCard from "@/components/cards/UserCard";
import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import React from "react";

interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
const Community = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,

  });

  return (
    <>
      <h1 className=" h1-bold text-dark100_light900  ">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Amazing Minds Here..."
          otherClasses="flex-1 "
        />
        <Filters
          otherClasses="min-h-[56px] min-w-[170px]"
          filters={UserFilters}
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No Users Yet</p>
            <Link href={"/sign-up"} className="mt-2 font-bold text-accent-blue">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Community;
