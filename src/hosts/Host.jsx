import { useParams } from "react-router-dom";
import { getHosts } from "./data";

export default function Host() {
  const hosts = getHosts();
  const { hostId } = useParams();

  return (
    <main style={{ padding: "1rem" }}>
      <p>{hosts[hostId]}</p>
    </main>
  );
}
