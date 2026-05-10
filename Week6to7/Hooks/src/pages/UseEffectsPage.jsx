import { useState, useEffect } from "react";

export default function UseEffectsPage() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch("https://dummyjson.com/post/" + id);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }
    fetchPost();
  }, [id]);

  //   fetchPost();

  return (
    <section>
      <article className="card">
        <h2>useEffect Example</h2>
        <p>Read data from dummy Endpoint</p>

        {post && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => setId(id + 1)}>Show Next Post</button>
          </div>
        )}
      </article>
    </section>
  );
}
