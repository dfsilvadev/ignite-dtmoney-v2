import { FormHTMLAttributes } from "react";

import { SearchFormInputs } from ".";

export type SearchFormProps = {
  handleSearchTransactions: (data: SearchFormInputs) => void;
} & FormHTMLAttributes<HTMLFormElement>;
