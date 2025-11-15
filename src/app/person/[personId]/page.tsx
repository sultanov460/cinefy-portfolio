import { getPersonDetails } from "@/utils/person";
import { ActorDetails } from "../widgets/ActorDetails";
import { notFound } from "next/navigation";
import OtherMovies from "../widgets/OtherMovies";
import { Person } from "@/types/actors";

interface PersonDetailsProps {
  params: Promise<{ personId: string }>;
}

export async function generateMetadata({ params }: PersonDetailsProps) {
  const { personId } = await params;
  const actor = await getPersonDetails(personId);
  return {
    title: actor.name,
  };
}

const PersonDetails = async ({ params }: PersonDetailsProps) => {
  const { personId } = await params;

  const actor: Person = await getPersonDetails(personId);

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
