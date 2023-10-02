import { FileX } from "~/utils/assets";
import { EmptyBlogContainer, Small, Strong, Text } from "./styles";

const EmptyBlog = () => {
  return (
    <EmptyBlogContainer>
      <FileX size={64} />
      <Text>
        <Strong>Nenhuma publicação encontrada</Strong>
        <Small>
          Você pode clicar em buscar e depois Enter ou recarregar a página
        </Small>
      </Text>
    </EmptyBlogContainer>
  );
};

export default EmptyBlog;
