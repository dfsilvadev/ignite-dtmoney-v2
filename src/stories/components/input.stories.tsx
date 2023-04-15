import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search"
};
