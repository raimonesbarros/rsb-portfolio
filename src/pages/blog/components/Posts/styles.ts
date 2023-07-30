import { styled } from "~/modules"

export const BlogPostsContainer = styled.div`
  width: 100%;
  max-width: calc(430px - 2rem);
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  background: ${(p) => p.theme.gray100};

  > span {
    height: 65%;
    margin-top: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    img {
      width: 100%;
      height: 130px;
      margin-bottom: 5rem;
    }
  }
`
export const Span = styled.span``

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: -0.8rem;

  color: ${(p) => p.theme.text};
`

export const Header = styled.div`
  display: flex;
  margin-top: -1.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  span {
    display: block;
    width: 100%;
    font-size: 0.875rem;
    text-align: end;
    color: ${(p) => p.theme.gray800};
  }
`
