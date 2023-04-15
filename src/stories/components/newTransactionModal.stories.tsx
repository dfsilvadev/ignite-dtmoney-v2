import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Dialog from "@radix-ui/react-dialog";

import { Button, NewTransactionModal } from "@/components";

export default {
  title: "Components/NewTransactionModal",
  component: NewTransactionModal,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof NewTransactionModal>;

const Template: ComponentStory<typeof NewTransactionModal> = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button type="button" size="small">
        Modal
      </Button>
    </Dialog.Trigger>

    <NewTransactionModal />
  </Dialog.Root>
);

export const Default = Template.bind({});
Default.args = {};
