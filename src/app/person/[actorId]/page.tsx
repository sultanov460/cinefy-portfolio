import { getPersonDetails } from "@/utils/person";
import { ActorDetails } from "../widgets/ActorDetails";
import { notFound } from "next/navigation";
import OtherMovies from "../widgets/OtherMovies";
import { Person } from "@/types/actors";

interface PersonDetailsProps {
  params: Promise<{ actorId: string }>;
}

const PersonDetails = async ({ params }: PersonDetailsProps) => {
  const { actorId } = await params;

  const actor: Person = await getPersonDetails(actorId);

  if (!actor) return notFound();

  const actorCast = actor.credits.cast ?? [];

  console.log(actor);

  return (
    <div>
      <ActorDetails actor={actor} />
      <OtherMovies actorCast={actorCast} gender={actor.gender} />
    </div>
  );
};

export default PersonDetails;
