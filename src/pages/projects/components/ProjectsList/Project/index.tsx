import { Image, ProjectContainer, ProjectInfo, Subtitle, Text } from "./styles"

const Project = ({
  image,
  title,
  smallDescription,
  position,
  onProjectToSee,
}: ProjectProps) => {
  return (
    <ProjectContainer onClick={() => onProjectToSee(position)}>
      <Image
        src={image}
        alt={`página inicial do projeto ${title}`}
        width={300}
      />
      <ProjectInfo>
        <Subtitle>{title}</Subtitle>
        <Text>{smallDescription}</Text>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project
