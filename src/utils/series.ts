import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getTrendingSeries() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/tv/week?language=en&api_key=${API_KEY}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error fetching trending series", e);
  }
}
