const title = "Raimones | Blog"
const description = "Blog do desenvolvedor front-end Raimones Barros"

export const SEOBlog: SEOProps = {
  title,
  description,
  canonical: "https://raimones.vercel.app/blog",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://raimones.vercel.app/blog",
    title,
    description,
    images: [
      {
        url: "https://raimones-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.fb8ae99c.png&w=640&q=75",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
