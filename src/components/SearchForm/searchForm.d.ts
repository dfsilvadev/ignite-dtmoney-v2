import { FormHTMLAttributes } from "react";

export type SearchFormProps = {
  onSubmit?: () => void;
} & FormHTMLAttributes<HTMLFormElement>;
