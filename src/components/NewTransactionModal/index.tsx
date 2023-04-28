import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import TransactionTypeButton from "@/components/TransactionTypeButton";

import * as S from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleSubmitNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2800));
  }

  return (
    <Dialog.Portal>
      <S.Overlay aria-label="overlay" />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.Close aria-label="close button">
          <X size={24} />
        </S.Close>

        <S.Form onSubmit={handleSubmit(handleSubmitNewTransaction)}>
          <Input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <Input
            type="number"
            min="1"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={20} weight="bold" />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={20} weight="bold" />
                    Saída
                  </TransactionTypeButton>
                </S.TransactionType>
              );
            }}
          />

          <Button
            type="submit"
            fullWidth
            icon={isSubmitting && <Spinner aria-hidden={isSubmitting} />}
            disabled={isSubmitting}
          >
            {!isSubmitting && "Cadastrar"}
          </Button>
        </S.Form>
      </S.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
