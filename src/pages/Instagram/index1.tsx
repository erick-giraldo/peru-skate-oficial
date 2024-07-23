import { useState } from 'react';
import axios from 'axios';

interface InstagramComment {
  id: string | null;
  username: string | null;
  text: string | null;
  timestamp: string | null;
}

interface InstagramPost {
  link: string;
  img: string | null;
  comments: InstagramComment[];
}

const Home = () => {
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInstagramPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/instagram?username=${username}`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Instagram Scraper</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Instagram username"
      />
      <button onClick={fetchInstagramPosts} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Posts'}
      </button>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img src={post.img ?? ''} alt="Instagram post" width="200" />
            </a>
            <div>
              <h3>Comments:</h3>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <strong>{comment.username}:</strong> {comment.text}
                  <br />
                  <small>{new Date(comment.timestamp ?? '').toLocaleString()}</small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
