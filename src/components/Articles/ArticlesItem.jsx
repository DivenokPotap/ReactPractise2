import { useContext } from "react";
import { Link, useLocation } from "react-router";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cutString } from "@/helpers/cut-string";
import { AuthContext } from "@/context/context";

export const ArticlesItem = ({ article }) => {
  const { isLogin } = useContext(AuthContext);
  const location = useLocation();

  if (!article) {
    return;
  }

  return (
    <div className="col-12 col-lg-6 col-xl-4 mb-4">
      <div className="card">
        <img
          height="400"
          width="400"
          alt={article.title}
          src={article.urlToImage || "/default_image.png"}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            <b>{article.title}</b>
          </h5>

          <p className="card-text">
            Description: <b>{cutString(article.description, 60)}</b>
          </p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              Author: <b>{article.author}</b>
            </li>
            <li className="list-group-item">
              Created:{" "}
              <b>{formatDistanceToNow(new Date(article.publishedAt))}</b>
            </li>
          </ul>

          {isLogin && (
            <div className="d-flex">
              <button type="button" className="btn btn-danger">
                Fake Delete article
              </button>

              <Link
                state={{ from: location }}
                to={article.url}
                className="btn btn-primary ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read article
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
