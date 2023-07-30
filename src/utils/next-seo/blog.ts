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
        url: "https://raimones.vercel.app/image.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
