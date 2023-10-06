import { FC } from "react";
import { ReactMarkdown, formatDistanceToNow, ptBR } from "~/modules";
import { BlogPostsContainer, Header, Span, Title } from "./styles";

const Posts: FC<BlogPostProps> = ({
  id,
  title,
  createdAt,
  body,
  onPostViewer,
}) => (
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
);

export default Posts;
