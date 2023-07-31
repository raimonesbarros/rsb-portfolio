import {
  GetStaticPaths,
  GetStaticProps,
  ReactMarkdown,
  useDinamicRouter,
} from "~/modules"
import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"

const Post = ({ post }: CurrentPostType) => {
  const { isFallback } = useDinamicRouter()
  isFallback && <p>Loading...</p>
  return (
    <>
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
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const postId = params?.id

  const post = await api.get(
    `/repos/raimonesbarros/github-blog/issues/${postId}`
  )

  return {
    props: {
      post: post.data,
    },
    revalidate: 60 * 60 * 1, // 1 Hour
  }
}
