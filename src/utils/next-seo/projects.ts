const title = "Raimones | Projetos"
const description =
  "Projetos do portfólio front-end do desenvolvedor Raimones Barros"

export const SEOProjects: SEOProps = {
  title,
  description,
  canonical: "https://raimones.vercel.app/projects",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://raimones.vercel.app/projects",
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
