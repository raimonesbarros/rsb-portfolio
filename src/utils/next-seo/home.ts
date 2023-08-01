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
        url: "https://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.4f9ce188.png&w=1920&q=75",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
