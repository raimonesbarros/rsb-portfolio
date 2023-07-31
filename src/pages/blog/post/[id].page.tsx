import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"
import { GetServerSideProps, ReactMarkdown, useDinamicRouter } from "~/modules"
import HandleFallback from "~/pages/components/Fallback"

const Post = ({ post }: CurrentPostType) => {
  const { isFallback } = useDinamicRouter()

  if (isFallback) {
    return <HandleFallback />
  }

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

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const postId = params?.id

  const post = await api.get(
    `/repos/raimonesbarros/github-blog/issues/${postId}`
  )
  console.log(post.data)
  return {
    props: {
      post: post?.data,
    },
  }
}
