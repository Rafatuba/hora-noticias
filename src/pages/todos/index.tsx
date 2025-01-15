import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router";
import "./todos.css";
import Voltar from "../../components/botoes-voltar";
import { Eye } from "lucide-react";
import { ThumbsUp } from "lucide-react";

interface Post {
  id: number;
  title: string;
  views: number;
  reactions: {
    likes: number;
  };
}

export default function Todos() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    try {
      const response = await api.get("/posts");
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
              <div key={post.id} className="post-card">
                <h2>{post.title}</h2>
                <div className="dados-posts">
                  <p>
                    <Eye color="red" size={24} /> {post.views ?? 0}
                  </p>
                  <p>
                    <ThumbsUp color="red" size={24} /> {post.reactions?.likes}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <Voltar />
    </div>
  );
}
