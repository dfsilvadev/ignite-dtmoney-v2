import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "../../components";

export default {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});
Default.args = {};
