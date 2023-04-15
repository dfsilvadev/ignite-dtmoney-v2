import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Summary } from "@/components";

export default {
  title: "Components/Summary",
  component: Summary,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ width: 1120, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = () => <Summary />;

export const Default = Template.bind({});
Default.args = {};
