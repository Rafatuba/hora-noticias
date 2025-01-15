import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ThumbsUp } from "lucide-react";
import { Eye } from "lucide-react";
import { Tag } from "lucide-react";

interface Post {
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

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    try {
      const response = await api.get("/posts");
      console.log(response.data.posts);
      setPosts(response.data.posts);
      // setPosts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Falha ao carregar: " + error);
      setPosts([]);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>Não há posts disponíveis.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
              <p>
                <Eye color="red" size={24} /> {post.views}
              </p>
              <p>
                <ThumbsUp color="red" size={24} /> {post.reactions.likes}
              </p>

              <p>
                <Tag color="red" size={24} /> {post.tags.join(", ")}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
