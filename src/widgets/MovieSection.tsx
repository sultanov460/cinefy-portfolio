"use client";
import { Movie } from "@/types/movies";
import { MovieCard } from "./MovieCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

interface MovieSectionProps {
  movies: Movie[];
  title: string;
}

export const MovieSection = ({ movies, title }: MovieSectionProps) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(min-width:300px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:500px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:840px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width:1280px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
  });

  useEffect(() => {
    if (slider) {
      const interval = setInterval(() => slider.current?.next(), 3000);
      return () => clearInterval(interval);
    }
  }, [slider]);

  return (
    <div className="flex flex-col gap-4 mt-20 mx-5 ">
      <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left tracking-[3px]">
        {title}
      </h1>
      <div ref={sliderRef} className="keen-slider">
        {movies.map((movie) => (
          <div key={movie.id} className="keen-slider__slide">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
