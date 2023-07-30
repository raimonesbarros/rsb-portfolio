import { NextSeo } from "~/modules"

interface SEODinamicProps {
  description: string
  postId: string | number
}

const SEODinamic = ({ description, postId }: SEODinamicProps) => (
  <NextSeo
    title={`Raimones | ${description}`}
    description={description}
    canonical="https://raimones.vercel.app/blog/"
    openGraph={{
      url: `https://raimones.vercel.app/blog/post/${postId}`,
      title: "Raimones | Blog-Post",
      description: `${description}`,
      images: [
        {
          url: "https://raimones.vercel.app/image.png",
          alt: "Página inicial do portfólio",
          width: 1280,
          height: 720,
        },
      ],
    }}
  />
)

export default SEODinamic
