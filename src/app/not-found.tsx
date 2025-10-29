const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 text-center justify-center h-full items-center">
      <h1 className="relative font-extrabold text-7xl pb-3 md:text-9xl text-primary tracking-[5px] titleLine">
        404
      </h1>
      <p className="font-medium text-sm md:text-3xl tracking-[3px] uppercase">
        Page not found.
      </p>
    </div>
  );
};

export default NotFound;
