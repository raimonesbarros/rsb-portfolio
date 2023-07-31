import { PostContainer, PostContent } from "./styles"
import { PostHeader } from "./components"
import { api } from "~/lib"
import { Footer, Header } from "~/pages/components"
import { ReactMarkdown, useDinamicRouter, useEffect, useState } from "~/modules"
import HandleFallback from "~/pages/components/Fallback"

const Post = () => {
  const [post, setPost] = useState<CurrentPostType>(Object)
  const { isFallback, query } = useDinamicRouter()

  if (isFallback) {
    return <HandleFallback />
  }

  const fetchPost = async () => {
    const response = await api.get(
      `/repos/raimonesbarros/github-blog/issues/${query.id}`
    )

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
