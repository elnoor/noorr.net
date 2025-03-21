import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import {
  stripHtmlTags,
  isValidImage,
  formatDate,
} from "../../helpers/utilities";

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
          if (data.items.length > 0) {
            setPosts(data.items);
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
        <div className="col-12 text-center">
          No posts found... Looks like I have been busy (:
        </div>
      ) : (
        <>
          {posts.length >= 10 && (
            <div className="col-12">
              <div className="my-4 p-3 border border-custom-color rounded-1 shadow text-center">
                Medium's RSS feed allows me to fetch and display{" "}
                <strong>only 10 articles</strong> here. Please, check
                <a
                  className="text-info mx-2 fw-bold"
                  href="https://medium.com/@elnoor"
                  target="_blank"
                  rel="noreferrer"
                >
                  my Medium profile
                </a>
                to view all stories of mine.
              </div>
            </div>
          )}

          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </>
      )}
    </div>
  );
}

function PostCard({ post }) {
  const hasThumbnail = isValidImage(post.thumbnail);
  return (
    <div className="col-md-6 mb-4">
      <div
        className="card bg-dark text-white border border-custom-color shadow"
        style={{
          height: "12rem",
        }}
        title={post.title}
      >
        {hasThumbnail && (
          <img
            src={post.thumbnail}
            className="card-img h-100 object-fit-cover"
            alt={post.title}
          />
        )}
        <div
          className={
            "d-flex flex-column card-img-overlay bg-black " +
            (hasThumbnail ? "bg-opacity-75" : "bg-opacity-25")
          }
        >
          <div className="h-100">
            <h5 className="card-title text-light text-ellipsis-nowrap">
              {post.title}
            </h5>
            <p className="card-text text-secondary text-break-max-4-lines">
              {getCleanShortDescription(post.description)}
            </p>
          </div>
          <div className="d-flex">
            <a
              href={post.guid}
              className="text-info"
              target="_blank"
              rel="noreferrer"
            >
              Continue reading
            </a>
            <small className="text-dark-emphasis ms-auto mt-auto">
              {formatDate(post.pubDate)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCleanShortDescription(description) {
  return stripHtmlTags(description.substring(0, 200)) + " ...";
}
