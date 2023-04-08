import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchForm } from "../../components";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
  tags: ["autodocs"],
  argTypes: {
    onInput: { action: "input" }
  },
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <div
    style={{
      padding: "1rem"
    }}
  >
    <SearchForm {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
