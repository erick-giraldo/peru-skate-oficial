import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchInstagramPosts } from "../../lib/instagram";
import { Button } from "@/components/ui/button";
import { IInstagram } from "@/components/types/instagram";

const InstagramAlbum: React.FC = () => {
  const [posts, setPosts] = useState<IInstagram[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<IInstagram[]>([]);
  const [loading, setLoading] = useState(true);

  const imagePost = ["CAROUSEL_ALBUM", "IMAGE"];

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchInstagramPosts();
        const imagePosts = postsData.filter(post => imagePost.includes(post.media_type));
        setPosts(imagePosts.slice(0, 15));
        setVisiblePosts(imagePosts.slice(0, 6));
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const loadMore = () => {
    const currentLength = visiblePosts.length;
    const more = posts.slice(currentLength, currentLength + 6);
    setVisiblePosts([...visiblePosts, ...more]);
  };

  if (loading) {
    return <p className="text-center text-xl">Cargando publicaciones...</p>;
  }

  if (posts.length === 0) {
    return (
      <p className="text-center text-xl">No se encontraron publicaciones de imágenes.</p>
    );
  }

  return (
    <section id="instagram" className="mb-16 md:mb-20 lg:mb-28">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visiblePosts.map((post, index) => (
            <div key={post.id} className="mb-4">
              {/* Renderiza la imagen principal */}
              <Image
                src={post.media_url}
                alt={post.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />

              {/* Renderiza las imágenes de los children si existen */}
              {post.media_type === "CAROUSEL_ALBUM" && post.children?.data && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {post.children.data.map((child) => (
                    <Image
                      key={child.id}
                      src={child.media_url}
                      alt={`Child image of ${post.caption}`}
                      width={250}
                      height={250}
                      className="w-full h-auto object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {visiblePosts.length < posts.length && (
          <div className="flex justify-center mt-4">
            <Button onClick={loadMore}>Cargar más</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramAlbum;
