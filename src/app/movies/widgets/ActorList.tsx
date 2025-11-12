"use client";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Cast } from "@/types/movies";
import Link from "next/link";
import { useState } from "react";
import { BiSolidImageAlt } from "react-icons/bi";

interface ActorListProps {
  cast: Cast[];
}

const ActorList = ({ cast }: ActorListProps) => {
  const [showMore, setShowMore] = useState(12);
  return (
    <div className="py-20">
      <h1 className="text-center font-bold mb-8 text-5xl">Actors</h1>
      <Container className="flex gap-4 flex-wrap items-center justify-center">
        {cast.slice(0, showMore).map((actor) => (
          <Link
            href={`/person/${actor.id}`}
            key={actor.id}
            className="mt-10 w-25"
          >
            {actor.profile_path ? (
              <img
                src={"https://www.themoviedb.org/t/p/w300" + actor.profile_path}
                alt={actor.name}
                className="rounded-xl"
              />
            ) : (
              <div className="flex justify-center items-center w-25 h-37.5 bg-primary rounded-lg">
                <BiSolidImageAlt size={50} />
              </div>
            )}
            <h1 className="mt-1 font-semibold text-sm w-full whitespace-nowrap text-ellipsis overflow-hidden">
              {actor.original_name}
            </h1>
          </Link>
        ))}
      </Container>
      <div className="flex justify-center my-10">
        {showMore < cast.length ? (
          <Button onClick={() => setShowMore(showMore + 6)}>Show More</Button>
        ) : (
          <Button onClick={() => setShowMore(12)}>Show Less</Button>
        )}
      </div>
    </div>
  );
};

export default ActorList;
