import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts.length === 0 && loading) {
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@elnoor/feed"
      )
        .then((res) => res.json())
        .then((data) => {
          debugger;
          if (data.items.length > 0) {
            // // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories more than 0
            // const _posts = data.items.filter(
            //   (item) => item.categories.length > 0
            // );
            // if (_posts.length > 0) {
            setPosts(data.items);
            // }
          }
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));
    }
  }, [loading, posts]);

  return (
    <div className="row">
      <div className="col-12 text-center mb-5">
        I rarely get excited but when I do, I jot them down{" "}
        <span className="text-opacity-50 text-secondary">
          or at least from now on...
        </span>
      </div>
      {loading ? (
        <div className="col-12 text-center">
          <LoadingSpinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="col-12 text-center">No posts found</div>
      ) : (
        posts.map((post, index) => <PostCards key={index} post={post} />)
      )}
    </div>
  );
}

function PostCards({ post }) {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
                {getCleanShortDescription(post.description)}
              </p>
              <p className="card-text mb-auto">
                <small className="text-muted">{post.pubDate}</small>
              </p>
              <a href={post.guid} className="stretched-link">
                Continue reading
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={post.thumbnail}
              className="img-fluid w-100 h-100"
              style={{
                objectFit: "cover",
              }}
              alt={post.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function getCleanShortDescription(description) {
  return description.substring(0, 200).replace(/(<([^>]+)>)/gi, ""); // strip html tags
}
