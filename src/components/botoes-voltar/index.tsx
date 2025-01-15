import { useNavigate } from "react-router";
import "./voltar.css";

export default function Voltar() {
  const navigate = useNavigate();

  function Voltar() {
    navigate(-1);
  }

  function VoltarHome() {
    navigate("/");
  }
  return (
    <div className="voltar-container">
      <p onClick={Voltar}>Voltar</p>
      <p onClick={VoltarHome}>Início</p>
    </div>
  );
}
