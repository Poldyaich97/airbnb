import { useParams } from "react-router-dom";

export default function Card() {
  const { Id } = useParams();
  return <p>{Id}</p>;
}
