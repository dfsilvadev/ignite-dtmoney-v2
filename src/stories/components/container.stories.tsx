import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "@/components";

export default {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} style={{ border: "1px solid #fff", marginTop: "2rem" }}>
    <span>Content</span>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
