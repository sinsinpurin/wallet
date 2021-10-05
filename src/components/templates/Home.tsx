import React from "react";

import { Body } from "../atoms/Body";
import { Container } from "../atoms/Container";
import { Home } from "../organisms/Home";
import { Header } from "../organisms/Header";

export interface HomeTemplateProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = () => {
  return (
    <Body>
      <Header />
      <Container>
        <Home />
      </Container>
    </Body>
  );
};
