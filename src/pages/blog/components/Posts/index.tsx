/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BlogPostsContainer, Header, Span, Title } from "./styles"
import { ReactMarkdown, formatDistanceToNow, ptBR } from "~/modules"

const Posts = ({ id, title, createdAt, body, onPostViewer }: BlogPostProps) => {
  return (
    <BlogPostsContainer onClick={() => onPostViewer(id)}>
      <Header>
        <Span>
          {formatDistanceToNow(new Date(createdAt!), {
            addSuffix: true,
            locale: ptBR,
          })}
        </Span>
        <Title>{title}</Title>
      </Header>
      <Span>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Span>
    </BlogPostsContainer>
  )
}

export default Posts
