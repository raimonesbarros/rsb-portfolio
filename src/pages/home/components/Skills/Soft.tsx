import { FC } from "react";
import { Card, CardsContainer, Heading, Strong, Text } from "./styles";

const Cards: FC = () => (
  <CardsContainer>
    <Card>
      <Heading>
        <Strong>Comunicação</Strong>
      </Heading>
      <Text>
        Possuo a capacidade de me comunicar efetivamente, tanto verbalmente
        quanto por escrito. Isso inclui falar em público e transmitir
        informações de maneira clara.
      </Text>
    </Card>
    <Card>
      <Heading>
        <Strong>Trabalho em Equipe</Strong>
      </Heading>
      <Text>
        Sou capaz de trabalhar bem em colaboração com equipes, contribuir com
        ideias e sugestões, ouvir os outros, resolver conflitos de comunicação e
        buscar alcançar objetivos coletivos.
      </Text>
    </Card>
    <Card>
      <Heading>
        <Strong>Resolução de Problemas</Strong>
      </Heading>
      <Text>
        Tenho uma boa capacidade de identificar, analisar e resolver problemas.
        Sou criativo na busca de soluções, tomar decisões e ser proativo na
        resolução de desafios.
      </Text>
    </Card>
    <Card>
      <Heading>
        <Strong>Adaptabilidade</Strong>
      </Heading>
      <Text>
        Sou capaz de me adaptar a mudanças, aprender rapidamente e lidar com
        situações imprevisíveis. Por ser flexível posso me ajustar a novos
        ambientes e tarefas com facilidade.
      </Text>
    </Card>
  </CardsContainer>
);

export default Cards;
