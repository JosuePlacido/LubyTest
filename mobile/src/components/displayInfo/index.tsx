import React from "react";
import {
  Container,
  DescriptionText,
  Indicator,
  TitleText,
  TitleView,
} from "./styles";
export interface InfoProps {
  title: string | undefined;
  description: string | undefined;
}
const Info: React.FC<InfoProps> = ({ title, description, children }) => {
  return (
    <Container>
      <TitleView>
        <Indicator />
        <TitleText>{title}</TitleText>
      </TitleView>
      <DescriptionText>{description}</DescriptionText>
      {children}
    </Container>
  );
};

export default Info;
