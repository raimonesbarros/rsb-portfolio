import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"
import { ReactMarkdown, useDinamicRouter, useState } from "~/modules"
import HandleFallback from "~/pages/components/Fallback"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  }
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
    revalidate: 60 * 60 * 0.5, // 30 min
  }
}

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
