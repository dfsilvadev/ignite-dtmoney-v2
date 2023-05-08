import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@components/Spinner";

import * as S from "./styles";

import { SearchFormProps } from "./types";
import { memo } from "react";

const searchFormSchema = z.object({
  query: z.string()
});

export type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchFormComponent = ({
  handleSearchTransactions,
  ...props
}: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

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

const SearchForm = memo(SearchFormComponent);

export default SearchForm;
