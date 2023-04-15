import { Container, Header } from "@/components";

import { BaseTemplateProps } from "./base";

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Base;
