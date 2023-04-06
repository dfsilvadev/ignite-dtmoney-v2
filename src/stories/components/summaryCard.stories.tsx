import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SummaryCard } from "../../components";
import { ArrowCircleUp } from "phosphor-react";

export default {
  title: "Components/SummaryCard",
  component: SummaryCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      name: "title",
      type: { name: "string" },
      description: "Define um título para o Summary Card."
    },
    value: {
      name: "value",
      description: "Opcional, define o valor a ser renderizado no card."
    },
    icon: {
      name: "icon",
      description: "Opcional, possibilita adicionar ícones ao conteúdo do card."
    }
  },
  args: {
    title: "Summary Card",
    icon: <ArrowCircleUp weight="bold" size={32} color="#00B37E" />,
    value: "R$ 1.259,00"
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ width: 312, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <SummaryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  variant: "success"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger"
};
