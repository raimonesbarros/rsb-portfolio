import { FC } from "react";
import { Tag } from "..";
import {
  Buttons,
  Content,
  FullImage,
  Link,
  Subtitle,
  Tags,
  Text,
  ViewerContainer,
  ViewerContent,
} from "./styles";

const Viewer: FC<ViewerProps> = ({
  image,
  title,
  tags,
  fullDescription,
  deploy,
  repository,
}) => (
  <ViewerContainer>
    <ViewerContent>
      <FullImage src={image} alt={`Imagem do projeto ${title}`} priority />
      <Content>
        <Subtitle>{title}</Subtitle>
        <Tags>
          {tags.map((tag, i) => {
            return <Tag key={i} content={tag} />;
          })}
        </Tags>
        <Text>{fullDescription}</Text>
      </Content>
    </ViewerContent>
    <Buttons>
      <Link href={deploy} target="_blank" rel="noreferrer">
        Ver mais
      </Link>
      <Link href={repository} target="_blank" rel="noreferrer">
        Código
      </Link>
    </Buttons>
  </ViewerContainer>
);

export default Viewer;
