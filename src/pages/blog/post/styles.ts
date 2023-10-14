import { ReactMarkdown, styled } from "~/modules";

export const PostContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 4.75rem auto 0;
  padding: 0.5rem;
  background-color: ${(p) => p.theme.background};
`;

export const PostContent = styled.article`
  width: 100%;

  padding: 2.5rem 2rem;
  font-size: 1.15rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  line-height: 150%;
  color: ${(props) => props.theme.text};

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
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
  overflow: hidden scroll;
  background-color: ${(p) => p.theme.background};

  code,
  pre {
    color: #ffffff !important;
    background-color: ${(p) => p.theme.gray300};
    gap: 0rem;
    user-select: text;
    border-radius: 4px;
    overflow: scroll;
  }

  pre {
    padding: 0 1rem;
  }
`;
