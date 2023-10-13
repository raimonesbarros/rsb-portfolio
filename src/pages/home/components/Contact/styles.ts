import { styled } from "~/modules";

export const ContactSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundLight};
`;

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${(p) => p.theme.border};
`;

export const Status = styled.p`
  position: absolute;
  top: 2.8rem;
  width: 100%;
  max-width: 300px;
  padding: 4px 8px;
  margin: 8px auto;
  border-radius: 4px;
  text-align: center;

  color: #fff;
  background-color: #0a0;
`;
