import { Container, Header } from "@/components";

import { BaseTemplateProps } from "./types";

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Base;
