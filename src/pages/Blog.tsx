import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const userName = "blakeyeboah";

const POSTS_QUERY = `
{
  user(username: "${userName}") {
    publication {
      posts(page: 0) {
        _id
        title
        brief
        slug
        coverImage
        dateAdded
      }
    }
  }
}
`;

const Card = () => {
  const [posts, setPosts] = useState<any[] | string[]>([]);

  useEffect(() => {
    fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POSTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data.user.publication.posts));
  }, []);

  return (
    <>
      <div id="container--main">
        <div className="row">
          <Link to="/">&#x2190; Go Back</Link>

          <div className="band">
            {posts.map((post) => (
              <div className="item">
                <a
                  href={`https://${userName}.hashnode.dev/${post.slug}`}
                  target="_blank"
                  className="card"
                >
                  <div
                    className="thumb"
                    style={{ backgroundImage: `url("${post.coverImage}")` }}
                  ></div>
                  <article>
                    <p>{new Date(post.dateAdded).toLocaleDateString()}</p>

                    <h1>{post.title}</h1>
                    <span>{post.brief}</span>
                  </article>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
