import { Container } from "@/app/components/Container";
import { Person } from "@/types/actors";
import getAge from "@/utils/getAge";
import getAgeOfDeath from "@/utils/getAgeOfDeath";

interface ActorDetailsProps {
  actor: Person;
}

export const ActorDetails = ({ actor }: ActorDetailsProps) => {
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
            <p className="font-semibold text-xl">
              {actor.known_for_department}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[#ccc]">Date of birth:</p>
            <p className="font-semibold text-xl">
              {actor.birthday ?? "Unknown"} (
              {actor.birthday && !actor.deathday && getAge(actor.birthday)})
            </p>
          </div>
          {actor.deathday && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[#ccc]">Date of death:</p>
              <p className="font-semibold text-xl">
                {actor.deathday} (
                {actor.birthday &&
                  getAgeOfDeath(actor.birthday, actor.deathday)}
                )
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2.5">
            <p className="text-[#ccc]">Place of born:</p>
            <p className="font-semibold text-xl">{actor.place_of_birth}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-medium text-lg">{actor.biography}</p>
      </div>
    </Container>
  );
};
