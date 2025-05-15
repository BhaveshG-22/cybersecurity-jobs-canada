import { parseISO, format } from "date-fns";

export default function DateTime({ date }) {
  const parsedDate = parseISO(date);
  return <time dateTime={date}>{format(parsedDate, "d MMM yyyy")}</time>;
}
