import { styled } from "~/modules";

export const EmptyBlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  color: ${(p) => p.theme.textLight};
`;

export const Text = styled.p``;
export const Strong = styled.strong``;
export const Small = styled.small`
  display: block;
`;
