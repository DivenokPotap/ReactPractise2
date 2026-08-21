import { useCallback } from "react";
import { useSearchParams } from "react-router";

import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { getArticles } from "../../services/articlesServices";
import { useFetch } from "../../hooks/useFetch";
import { fetchStatus } from "../../constants/fetchStatus";

export const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page") ?? 1;
  const queryParam = searchParams.get("search") ?? "";

  const queryParams = Object.fromEntries([...searchParams]);

  const fetchArticles = useCallback(
    () => getArticles(queryParam, pageParam),
    [pageParam, queryParam],
  );

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const articleSearch = e.target.elements.search.value.trim();
    console.log("🚀 ~ handleSubmitSearch ~ articleSearch:", articleSearch);

    if (!articleSearch) {
      alert("Empty search");
      return;
    }

    console.log(articleSearch);
    searchParams.set("search", articleSearch);
    searchParams.set("page", 1);
    setSearchParams({ search: articleSearch, page: 1 });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  const { data, status } = useFetch(fetchArticles);

  if (status === fetchStatus.Loading || status === fetchStatus.Idle) {
    return <ArticlesLoader />;
  }

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  const { articles } = data;

  const isSearchEmpty = articles.length === 0 && queryParam;

  return (
    <>
      <ArticlesSearch
        onSubmitSearch={handleSubmitSearch}
        handleReset={handleReset}
      />
      <div className="container-fluid g-0">
        <div className="row">
          {!isSearchEmpty ? (
            articles?.map((article) => (
              <ArticlesItem key={article.url} article={article} />
            ))
          ) : (
            <p>
              Such article not founded <b>{queryParam} 😢</b>
            </p>
          )}
        </div>
      </div>

      {articles.length !== 0 && (
        <div className="pagination">
          <div className="btn-group my-4 mx-auto btn-group-lg">
            {[...Array(5)].map((_, index) => (
              <Button
                onClick={() =>
                  setSearchParams({ ...queryParams, page: index + 1 })
                }
                disabled={index + 1 === pageParam}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
