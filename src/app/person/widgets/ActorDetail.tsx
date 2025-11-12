import { Container } from "@/app/components/Container";
import { ActorDetails } from "@/types/actors";

interface ActorDetailsProps {
  actor: ActorDetails;
}

export const ActorDetail = ({ actor }: ActorDetailsProps) => {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 mb-20">
      <div className="flex gap-12 items-center">
        <img
          src={"https://www.themoviedb.org/t/p/w300" + actor.profile_path}
          alt={actor.name}
          className="rounded-3xl border"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{actor.name}</h1>
          <div className="flex flex-col gap-2.5">
            <p className="text-[#ccc]">Known for:</p>
            <p>{actor.known_for_department}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[#ccc]">Date of birth:</p>
            <p>{actor.birthday}</p>
          </div>
          {actor.deathday && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[#ccc]">Date of death:</p>
              <p>{actor.deathday}</p>
            </div>
          )}
          <div className="flex flex-col gap-2.5">
            <p className="text-[#ccc]">Place of born:</p>
            <p>{actor.place_of_birth}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">{actor.biography}</p>
      </div>
    </Container>
  );
};
