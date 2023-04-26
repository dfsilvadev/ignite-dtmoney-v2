type FormatterProps = {
  type: "currency" | "date";
  value: string | number;
};

function formatter({ type, value }: FormatterProps) {
  switch (type) {
    case "currency":
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(Number(value));

    case "date":
      return new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "UTC"
      }).format(new Date(value));
  }
}

export default formatter;
