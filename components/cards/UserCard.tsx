"use client"
import { getTopInteractedTags } from "@/lib/actions/tag.action";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import RenderTags from "../shared/RenderTags";
import { useEffect, useState } from "react";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard =  ({ user }: Props) => {
  // const interactedTags = await getTopInteractedTags({ userId: user._id });


  const [interactedTags, setInteractedTags] = useState<any[]>([]);

  useEffect(() => {
    const fetchInteractedTags = async () => {
      try {
        const tags = await getTopInteractedTags({ userId: user._id });
        setInteractedTags(tags);
      } catch (error) {
        console.error("Failed to fetch tags", error);
      } 
    };

    fetchInteractedTags();
  }, [user._id]);

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone w-full max-xs:min-h-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex flex-col w-full items-center rounded-2xl border p-8 ">
        <Image
          src={user.picture}
          alt="user profile image"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className=" mt-4 text-center ">
          <h3 className="h3-bold  text-dark200_light900 line-clamp-1 ">
            {user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>
        <div className="mt-5 ">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <RenderTags key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No Tags Yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
