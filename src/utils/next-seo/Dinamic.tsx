import { NextSeo } from "~/modules"

interface SEODinamicProps {
  description: string
  postId: string | number
}

const SEODinamic = ({ description, postId }: SEODinamicProps) => (
  <NextSeo
    title={`Raimones | ${description}`}
    description={description}
    canonical={`https://raimones-portfolio.vercel.app/blog/post/${postId}`}
    openGraph={{
      url: `https://raimones-portfolio.vercel.app/blog/post/${postId}`,
      title: `Raimones | ${description}`,
      description: `${description}`,
      images: [
        {
          url: "https://raimones-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.fb8ae99c.png&w=640&q=75",
          alt: "Página inicial do portfólio",
          width: 1280,
          height: 720,
        },
      ],
    }}
  />
)

export default SEODinamic
