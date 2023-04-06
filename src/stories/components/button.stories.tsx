import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../components";
import { ShoppingCart } from "phosphor-react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      name: "Button size",
      type: { name: "string" },
      description: "Opções de tamanho para o componente Button.",
      options: ["small", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "md"
        },
        type: {
          summary: "Opções de tamanho.",
          detail: "small, medium, large"
        }
      }
    },
    children: {
      name: "Button children",
      description: "O children define o conteúdo do button."
    },
    fullWidth: {
      name: "Full width",
      description: "Opcional, define se o button terá 100% do tamanho do pai."
    },
    icon: {
      name: "Button with icon",
      description:
        "Opcional, possibilita adicionar ícones ao conteúdo do button."
    },
    as: {
      name: "As",
      description:
        "Opcional, define se o componente será renderizado como button ou link.",
      table: {
        type: {
          summary: "Tipos",
          detail: "button ou a"
        }
      }
    },
    minimal: {
      name: "Button minimal",
      description:
        "Opcional, remove os estilos de button renderizando apenas o texto."
    }
  },
  args: {
    children: "Buy now",
    size: "medium",
    fullWidth: false,
    minimal: false
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ width: 850, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small"
};

export const Medium = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "large"
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <ShoppingCart />
};

export const Minimal = Template.bind({});
Minimal.args = {
  icon: <ShoppingCart />,
  minimal: true
};

export const AsLink = Template.bind({});
AsLink.args = {
  icon: <ShoppingCart />,
  minimal: true,
  as: "a",
  href: "/link"
};
