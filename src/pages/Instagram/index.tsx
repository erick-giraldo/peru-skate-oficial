
import { useEffect, useState } from 'react';
import { fetchInstagramPosts, fetchInstagramComments } from '../../lib/instagram';
import { IInstagram } from '@/components/types';

const InstagramPage = () => {
  const [posts, setPosts] = useState<IInstagram[]>([]);
  console.log("🚀 ~ InstagramPage ~ posts:", posts)
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchInstagramPosts();
      setPosts(postsData);

      const commentsData = await Promise.all(
        postsData.map(async (post) => {
          const postComments = await fetchInstagramComments(post.id);
          return { [post.id]: postComments };
        })
      );

      const commentsObject = commentsData.reduce((acc, comment) => {
        return { ...acc, ...comment };
      }, {});

      setComments(commentsObject);
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  return (
    <div>
      <h1>Publicaciones de Instagram</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '2rem' }}>
          <img src={post.media_url} alt={post.caption} width={300} />
          <p>{post.caption}</p>
          <h3>Comentarios:</h3>
          {/* {comments[post.id] ? (
            comments[post.id].map((comment) => (
              <p key={comment.id}>{comment.text}</p>
            ))
          ) : (
            <p>No hay comentarios.</p>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default InstagramPage;
