import { getMovieGenres } from "@/utils/movies";

import SidebarClient from "./SidebarClient";

const Sidebar = async () => {
  const { genres } = await getMovieGenres();

  return <SidebarClient genres={genres} />;
};

export default Sidebar;
