import { FC } from "react";
import { Span, Strong, Title } from "./styles";

type Props = {
  normal: string;
  bold: string;
  reverse?: boolean;
};

const Subtitle: FC<Props> = ({ bold, normal, reverse }) => (
  <Title>
    {reverse ? (
      <>
        <Span>{normal}</Span> <Strong>{bold}</Strong>
      </>
    ) : (
      <>
        <Strong>{bold}</Strong> <Span>{normal}</Span>
      </>
    )}
  </Title>
);

export default Subtitle;
