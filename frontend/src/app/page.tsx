import Image from "next/image";
import PlayerSearch from "./components/PlayerSearch";

export default function Home() {
  return (
    <div>
    <h1>Welcome to MLB Stats</h1>
    <PlayerSearch />
  </div>
  );
}
