import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getTrendingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en&api_key=${API_KEY}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error fetching trending movies", e);
  }
}

export async function getMovieGenres() {
  try {
    const res = await axios.get(
      `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error fetching movie genres", e);
  }
}

export async function getMovieByGenre(id: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error fetching movies by genre", e);
  }
}
