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
        url: "https://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprojects.af87892b.png&w=3840&q=75",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
