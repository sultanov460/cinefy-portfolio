import { Container } from "@/app/components/Container";
import { Video } from "@/types/types";
import ReactPlayer from "react-player";

interface TrailerProps {
  results: Video[];
}

export const Trailer = ({ results }: TrailerProps) => {
  const trailers = results.filter((x) => x.type === "Trailer") || [];

  if (!trailers.length) {
    return (
      <div className="my-20 text-center text-gray-400 text-4xl">
        No trailers available
      </div>
    );
  }

  return (
    <div className="my-20 relative z-20">
      <Container className="flex flex-col px-2">
        <h1 className="font-bold text-center mb-10 text-5xl">
          Trailers & Clips
        </h1>
        <div className="flex flex-col gap-6">
          {trailers.map((video) => (
            <ReactPlayer
              key={video.id}
              src={`https://www.youtube.com/watch?v=${video.key}`}
              width="100%"
              height="400px"
              controls
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
