import { Footer, Header, HandleFallback } from "~/pages/components"
import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { SEODinamic } from "~/utils"
import {
  GetStaticPaths,
  GetStaticProps,
  ReactMarkdown,
  useDinamicRouter,
} from "~/modules"

const Post = ({ post }: CurrentPostType) => {
  const { isFallback } = useDinamicRouter()

  if (isFallback) {
    return <HandleFallback />
  }

  return (
    <>
      <SEODinamic postId={post.number} description={post.title} />
      <Header />
      <PostContainer>
        {post.user && <PostHeader post={post} />}
        <PostContent>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </PostContent>
      </PostContainer>
      <Footer />
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog`,
      _sort: "created_at",
      _order: "desc",
    },
  })

  const items = res.data.items

  const paths = items.map((item: any) => ({
    params: {
      id: item.number.toString(),
    },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const postId = params?.id
  const response = await api.get(
    `/repos/raimonesbarros/github-blog/issues/${postId}`
  )

  return {
    props: { post: response.data },
    revalidate: 60 * 60 * 1, // 1 Hour
  }
}
