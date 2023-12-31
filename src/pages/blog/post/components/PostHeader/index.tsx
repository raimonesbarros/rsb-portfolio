import { FC } from "react";
import { formatDistanceToNow, ptBR } from "~/modules";
import {
  BackSvg,
  CommentSvg,
  DateSvg,
  GithubSvg,
  LinkSvg,
} from "~/utils/assets";
import SEODynamic from "~/utils/next-seo/Dynamic";
import {
  Link,
  PostHeaderContainer,
  PostHeaderInfo,
  PostHeaderLinks,
  Span,
  Text,
  Title,
} from "./styles";

const PostHeader: FC<PostHeaderProps> = ({ post }) => (
  <PostHeaderContainer>
    <SEODynamic description={post.title} postId={post.html_url.slice(-1)} />
    <PostHeaderLinks>
      <Link href="/blog">
        <BackSvg />
        <Span>Voltar</Span>
      </Link>
      <Link href={post.html_url} target="_blank">
        <Span>Ver no github</Span>
        <LinkSvg />
      </Link>
    </PostHeaderLinks>
    <Title>{post.title}</Title>
    <PostHeaderInfo>
      <Text>
        <GithubSvg />
        <Span>{post.user.login}</Span>
      </Text>
      <Text>
        <DateSvg />
        <Span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </Span>
      </Text>
      <Text>
        <CommentSvg />
        <Span>{`${post.comments} comentários`}</Span>
      </Text>
    </PostHeaderInfo>
  </PostHeaderContainer>
);

export default PostHeader;
