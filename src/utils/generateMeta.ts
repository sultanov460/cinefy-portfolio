export const generateMeta = ({
  name,
  description,
  url,
  image,
  imageAltText,
}: any) => {
  return {
    title: name,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: name,
      description,
      url,
      siteName: "Cinefy",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: imageAltText,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
      },
    },
  };
};
