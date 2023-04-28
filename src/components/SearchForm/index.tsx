import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";
import Spinner from "../Spinner";

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchForm = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2800));
  }

  return (
    <S.SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Busque uma transação"
        aria-label="search"
        {...register("query")}
      />
      <Button
        type="submit"
        ghost
        icon={
          isSubmitting ? (
            <Spinner aria-hidden={isSubmitting} />
          ) : (
            <MagnifyingGlass weight="bold" />
          )
        }
        disabled={isSubmitting}
      >
        {isSubmitting ? "Buscando" : "Buscar"}
      </Button>
    </S.SearchFormContainer>
  );
};

export default SearchForm;
