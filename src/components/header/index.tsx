import Logo from "./../../assets/blog.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="" />
      <div className="textos">
        <h1>Hora da Notícia</h1>
        <h3>O seu blog de notícias semanais</h3>
      </div>
    </div>
  );
}
