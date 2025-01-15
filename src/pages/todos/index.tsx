import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router";
import "./todos.css";
import Voltar from "../../components/botoes-voltar";

interface Post {
  id: number;
  title: string;
}

export default function Todos() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    try {
      const response = await api.get("/posts");
      console.log(response.data.posts);
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Falha ao carregar: " + error);
      setPosts([]);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="pagina-todos">
      <h1>Todos os Posts</h1>
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post) => (
            <Link to={`/detalhe/${post.id}`}>
              <div key={post.id}>
                <h2>{post.title}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
      <Voltar />
    </div>
  );
}
