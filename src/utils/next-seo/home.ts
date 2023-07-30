const title = "Raimones | Portfólio"
const description = "Portfólio front-end do desenvolvedor Raimones Barros"

export const SEOMain: SEOProps = {
  title,
  description,
  canonical: "https://raimones.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://raimones.vercel.app",
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
