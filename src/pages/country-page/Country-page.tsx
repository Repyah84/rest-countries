import { useParams } from "react-router-dom";

export function CountryPage(): JSX.Element {
  const { id } = useParams();

  return <div>{id}</div>;
}
