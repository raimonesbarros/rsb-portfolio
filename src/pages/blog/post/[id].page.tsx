import { ReactMarkdown } from "~/modules"
import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

const Post = ({ post }: CurrentPostType) => {
  const { isFallback } = useRouter()
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
    paths: [{ params: { id: "1" } }],
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
    revalidate: 60 * 60 * 0.5, // 30 min
  }
}
