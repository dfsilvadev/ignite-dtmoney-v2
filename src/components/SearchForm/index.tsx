import { ChangeEvent, FormEvent, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

import { SearchFormProps } from "./searchForm";

const SearchForm = ({ onSubmit, ...props }: SearchFormProps) => {
  const [value, setValue] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = evt.currentTarget.value;

    setValue(inputtedValue);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    !!onSubmit && onSubmit();
  };

  return (
    <S.SearchFormContainer {...props} onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Busque uma transação"
        value={value}
        aria-label="search"
        onChange={handleChange}
      />
      <Button type="submit" ghost icon={<MagnifyingGlass weight="bold" />}>
        Buscar
      </Button>
    </S.SearchFormContainer>
  );
};

export default SearchForm;
