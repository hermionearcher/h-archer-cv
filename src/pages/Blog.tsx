import React, { useState, useEffect } from 'react';
import './styles.css';

const user: any = 'blakeyeboah';

const POSTS_QUERY = `
{
  user(username: "${user}") {
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

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: POSTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data.user.publication.posts));
  }, []);

  return (
    <>
      <div className="back-btn">
        <a href="/">&#x2190; Go Back</a>
      </div>
      <div className="row">
        <div className="band">
          {posts.map((post) => (
            <div className="item">
              <a
                href={`https://${user}.hashnode.dev/${post.slug}`}
                target="_blank"
                className="card"
              >
                <div
                  className="thumb"
                  style={{ backgroundImage: `url("${post.coverImage}")` }}
                ></div>
                <article>
                  <h1>{post.title}</h1>
                  <span>{post.brief}</span>
                </article>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
