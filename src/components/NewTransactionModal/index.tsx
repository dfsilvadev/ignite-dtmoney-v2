import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import TransactionTypeButton from "@/components/TransactionTypeButton";

import useTransactions from "@/hooks/useTransactions";

import * as S from "./styles";

import { NewTransactionModalProps } from "./type";

const newTransactionFormSchema = z.object({
  description: z.string().min(1),
  price: z.number(),
  category: z.string().min(1),
  type: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

const NewTransactionModal = ({ onCloseChange }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  });

  async function handleSubmitNewTransaction(data: NewTransactionFormInputs) {
    try {
      const { description, price, type, category } = data;

      await createTransaction({
        description,
        price,
        category,
        type
      });
    } catch {
      throw new Error("Erro ao cadastrar nova transação");
    } finally {
      reset();
      onCloseChange();
    }
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
            {...register("description")}
            error={!!errors.description?.message}
          />
          <Input
            type="number"
            step="0.01"
            min="0.10"
            placeholder="Preço"
            {...register("price", { valueAsNumber: true })}
            error={!!errors.price?.message}
          />
          <Input
            type="text"
            placeholder="Categoria"
            {...register("category")}
            error={!!errors.category?.message}
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
