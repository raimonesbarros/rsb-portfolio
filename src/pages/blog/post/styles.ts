import { ReactMarkdown, styled } from "~/modules";

export const PostSection = styled.section`
  background-color: ${(p) => p.theme.backgroundLight};
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.75rem auto 0;
  padding: 0.5rem;
`;

export const PostContent = styled.article`
  width: 100%;

  padding: 2.5rem 2rem;
  font-size: 1.15rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  line-height: 150%;
  color: ${(props) => props.theme.textLight};

  img {
    width: 100%;
    max-height: 200px;
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;

    &::after {
      content: " 🔗";
    }
  }

  code {
    font-size: 0.85rem;
  }
`;

export const Markdown = styled(ReactMarkdown)`
  color: ${(props) => props.theme.textLight};
`;
