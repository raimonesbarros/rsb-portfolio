import { Image, ProjectContainer, ProjectInfo, Subtitle, Text } from "./styles";

const Project = ({
  image,
  title,
  smallDescription,
  position,
  changeCurrentProject,
}: ProjectProps) => {
  return (
    <ProjectContainer onClick={() => changeCurrentProject(position)}>
      <Image
        src={image}
        alt={`página inicial do projeto ${title}`}
        width={160}
        height={90}
        priority
      />
      <ProjectInfo>
        <Subtitle>{title}</Subtitle>
        <Text>{smallDescription}</Text>
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default Project;
