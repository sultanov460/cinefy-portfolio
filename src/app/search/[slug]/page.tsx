interface SearchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SearchPage = async ({ params }: SearchPageProps) => {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-center text-5xl mt-10 font-semibold tracking-[1px]">
        Search results for{" "}
        <span className="text-primary">{`"${decodeURIComponent(slug)}"`}</span>
      </h1>
    </div>
  );
};

export default SearchPage;
