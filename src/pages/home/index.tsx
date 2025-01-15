import { Link } from "react-router";
import "./home.css";

export default function Home() {
  const imageUrl = {
    fotografa:
      "https://img.freepik.com/fotos-gratis/jovem-loira-no-parque-de-diversoes_23-2147918108.jpg?t=st=1736951847~exp=1736955447~hmac=e9af93532ccba1c533e564b239d6be7d45f8504a40b3bf2d0d9b28292ca63385&w=740",
    tecnologia:
      "https://img.freepik.com/fotos-gratis/inteligencia-artificial-de-chip-de-ia-inovacao-tecnologica-futura_53876-129780.jpg?t=st=1736951007~exp=1736954607~hmac=8492e41a01e577bb09ab32b4c40c2543c03bd8562ee88ed3886c60bdae285597&w=740",
    alimentacao:
      "https://img.freepik.com/fotos-gratis/fotografia-de-salmao-com-vegetais-em-arroz_53876-108181.jpg?t=st=1736951716~exp=1736955316~hmac=9cf20a77ec0860bc19517a7412d020ae10e98c99beb72008a457809b10b9f78c&w=740",
  };

  return (
    <div>
      <div className="botoes">
        <Link to={"/todos"}>
          <button>Todos</button>
        </Link>
        <button>História</button>
        <button>Ficção</button>
      </div>
      <div className="cards-container">
        <div className="card-aleatorio">
          <img src={imageUrl.fotografa} alt="" />
          <div className="descricao">
            <h2>Fotografia para 2025</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur enim rerum odit eos, excepturi dolores molestiae non
              eaque nam?
            </p>
          </div>
        </div>
        <div className="card-aleatorio">
          <img src={imageUrl.tecnologia} alt="" />
          <div className="descricao">
            <h2>Novidades da Tecnologia</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur enim rerum odit eos, excepturi dolores molestiae non
              eaque nam?
            </p>
          </div>
        </div>
        <div className="card-aleatorio">
          <img src={imageUrl.alimentacao} alt="" />
          <div className="descricao">
            <h2>Cuidados na alimentação</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur enim rerum odit eos, excepturi dolores molestiae non
              eaque nam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
