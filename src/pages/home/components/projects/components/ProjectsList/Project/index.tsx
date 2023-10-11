import { FC } from "react";
import { Image, ProjectContainer, ProjectInfo, Subtitle, Text } from "./styles";

const Project: FC<ProjectProps> = ({
  image,
  title,
  smallDescription,
  position,
  changeCurrentProject,
}) => (
  <ProjectContainer onClick={() => changeCurrentProject(position)} tabIndex={0}>
    <Image src={image} alt={`página inicial do projeto ${title}`} priority />
    <ProjectInfo>
      <Subtitle>{title}</Subtitle>
      <Text>{smallDescription}</Text>
    </ProjectInfo>
  </ProjectContainer>
);

export default Project;
