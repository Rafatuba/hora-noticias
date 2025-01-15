import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="botoes">
        <Link to={"/todos"}>
          <button>Todos</button>
        </Link>
        <button>História</button>
        <button>Ficção</button>
      </div>
    </div>
  );
}
