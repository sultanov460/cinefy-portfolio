import { getPersonDetails } from "@/utils/person";
import { ActorDetail } from "../widgets/ActorDetail";
import { notFound } from "next/navigation";
import ActorCast from "../widgets/ActorCast";

interface PersonDetailsProps {
  params: Promise<{ actorId: string }>;
}

const PersonDetails = async ({ params }: PersonDetailsProps) => {
  const { actorId } = await params;

  const actor = await getPersonDetails(actorId);

  if (!actor) return notFound();

  const actorCast = actor.credits.cast ?? [];

  return (
    <div>
      <ActorDetail actor={actor} />
      <ActorCast actorCast={actorCast} />
    </div>
  );
};

export default PersonDetails;
