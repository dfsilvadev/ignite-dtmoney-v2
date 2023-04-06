import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../../components";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
