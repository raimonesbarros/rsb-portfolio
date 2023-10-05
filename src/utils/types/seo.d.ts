declare type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
};
