import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getTrendingSeries() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/tv/week?language=en&api_key=${API_KEY}`
    );
    return res.data;
  } catch (e) {
    console.error("Error fetching trending series", e);
  }
}

export async function getSeriesDetails(id: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/tv/${id}?language=en-US&append_to_response=credits&api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSimilarSeries (id: string)  {
  try {
    const res = await axios.get(
        `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getSeriesVideo(seriesId: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/tv/${seriesId}/videos?language=en-US&api_key=${API_KEY}`
    );

    return res.data;
  } catch (e) {
    console.error("Error fetching series videos", e);
    return [];
  }
}
