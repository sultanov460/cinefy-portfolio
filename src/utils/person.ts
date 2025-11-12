import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const getPersonDetails = async (actorId: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/person/${actorId}?append_to_response=credits&language=en-US&api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching person details:", error);
    return null;
  }
};

export const getActorCast = async (actorId: string) => {
  try {
    const personData = await getPersonDetails(actorId);

    if (!personData || !personData.credits) {
      return [];
    }

    return personData.credits.cast;
  } catch (error) {
    console.error("Error fetching actor projects:", error);
    return [];
  }
};
