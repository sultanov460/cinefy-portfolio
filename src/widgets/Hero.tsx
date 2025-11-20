const Hero = () => {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center text-center w-[95%] h-130 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?quality=50&strip=all')] bg-center bg-cover rounded-3xl text-white mx-auto">
      <h1 className="xl:text-6xl text-3xl font-semibold">
        Welcome to <span className="text-primary ">Cinefy!</span>
      </h1>
      <p className="max-w-xl text-[12px] tracking-[1px]">
        Welcome to Cinefy — your personal gateway to the world of movies and
        series. Dive into fresh releases, timeless classics, trending shows, and
        hidden gems. With easy navigation and rich details, Cinefy helps you
        find the perfect title for every mood.
      </p>
    </div>
  );
};

export default Hero;
