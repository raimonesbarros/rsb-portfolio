import { styled } from "~/modules";

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  min-height: calc(100vh - 4.75rem);

  margin: 4.75rem auto 0;
  padding: 0 0.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const BlogInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  span {
    font-size: 0.875rem;
    color: ${(p) => p.theme.gray800};
  }
`;

export const Span = styled.span`
  font-size: 0.875rem;
  color: ${(p) => p.theme.gray800};
`;

export const Text = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${(p) => p.theme.text};
`;

export const FormContainer = styled.form``;
export const Input = styled.input`
  width: 100%;

  padding: 0.6rem 1rem;
  margin-top: 0.75rem;

  border: 1px solid ${(p) => p.theme.gray800};
  border-radius: 6px;

  color: ${(p) => p.theme.text};
  background: ${(p) => p.theme.gray100};

  &::placeholder {
    color: ${(p) => p.theme.gray600};
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.primary};
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(p) => p.theme.primary};
  }
`;

export const Button = styled.button`
  display: none;
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;

  > div {
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      border: 1px solid ${(p) => p.theme.primary};
      filter: brightness(1.5);
    }
  }
`;
