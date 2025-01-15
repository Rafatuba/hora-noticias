import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../services/api";
import "./detalhe-style.css";

import { ThumbsUp } from "lucide-react";
import { Eye } from "lucide-react";
import { Tag } from "lucide-react";
import Voltar from "../../components/botoes-voltar";

interface PostProp {
  id: number;
  title: string;
  body: string;
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  userId: number;
}

export default function Detalhe() {
  const [posts, setPosts] = useState({} as PostProp);

  const { id } = useParams();

  async function getPosts() {
    try {
      const response = await api.get<PostProp>(`/posts/${id}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Falha ao carregar: " + error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="pagina-post">
      <h1>Detalhe do post</h1>

      <div>
        <div key={posts.id} className="post-container">
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
          <div className="dados">
            <p>
              <Eye color="red" size={24} /> {posts.views ?? 0}
            </p>
            <p>
              <ThumbsUp color="red" size={24} /> {posts.reactions?.likes}
            </p>

            <p>
              <Tag color="red" size={24} />{" "}
              {posts.tags?.length ? posts.tags.join(", ") : "Sem tags"}
            </p>
          </div>
        </div>
      </div>
      <Voltar />
    </div>
  );
}
