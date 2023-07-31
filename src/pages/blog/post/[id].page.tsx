import {
  GetStaticPaths,
  GetStaticProps,
  NextImage,
  ReactMarkdown,
  useDinamicRouter,
} from "~/modules"
import { Fallback, PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"
import favicon from "public/favicon.png"

const Post = ({ post }: CurrentPostType) => {
  const { isFallback } = useDinamicRouter()

  if (isFallback) {
    return (
      <Fallback>
        <NextImage src={favicon} width={30} alt="carregnado página" priority />
      </Fallback>
    )
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const postId = params?.id

  const post = await api.get(
    `/repos/raimonesbarros/github-blog/issues/${postId}`
  )
  console.log(post.data)
  return {
    props: {
      post: post?.data,
    },
    revalidate: 60 * 60 * 1, // 1 Hour
  }
}
