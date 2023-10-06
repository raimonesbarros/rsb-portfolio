import { FC } from "react";
import { Code, Devices, HandTap, Layout } from "~/utils";
import { Card, CardsContainer, Heading, Strong, Text } from "./styles";

const Cards: FC = () => (
  <CardsContainer>
    <Card>
      <Heading>
        <Code size={32} />
        <Strong>Código semântico</Strong>
      </Heading>
      <Text>
        Estrutura descritiva clara e objetiva para facilitar a leitura e
        interpretação, especialmente de motores de busca
      </Text>
    </Card>
    <Card>
      <Heading>
        <Devices size={32} />
        <Strong>Responsividade</Strong>
      </Heading>
      <Text>
        Estilos preparados para se adaptar aos diferentes softwares e
        dispositivos
      </Text>
    </Card>
    <Card>
      <Heading>
        <Layout size={32} />
        <Strong>Design atrativo</Strong>
      </Heading>
      <Text>
        Criação visual utilizando técnicas de design como psicologia das cores,
        tipografia, hierarquia e etc...
      </Text>
    </Card>
    <Card>
      <Heading>
        <HandTap size={32} />
        <Strong>Dinamicidade</Strong>
      </Heading>
      <Text>
        Uso de métodos dinâmicos e de interatividade com o usuário para garantir
        a melhor experiência
      </Text>
    </Card>
  </CardsContainer>
);

export default Cards;
