import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TransactionsTable } from "../../components";

export default {
  title: "Components/TransactionsTable",
  component: TransactionsTable,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof TransactionsTable>;

const Template: ComponentStory<typeof TransactionsTable> = (args) => <TransactionsTable {...args} />;

export const Default = Template.bind({});
Default.args = {};