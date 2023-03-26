import { useContext, useEffect, useState } from "react";
import Article from "../components/article/Article";
import ArticleContext from "../context/article-context";
import { getArticle } from "../services/article-service";

const Articles = () => {
  const [pageNumber, SetpageNumber] = useState(10);
  const articleContext = useContext(ArticleContext);

  useEffect(() => {
    if (pageNumber > articleContext.total) {
      getArticle(pageNumber).then((value) => {
        articleContext.addToarticleHandler(value);
      });
    }
  }, [articleContext, pageNumber]);

  const changePage = () => {
    SetpageNumber((pre) => pre + 10);
  };

  return (
    <>
      <h1>Article</h1>
      <button onClick={changePage}>{pageNumber}</button>
      <Article
        data={articleContext.articles.slice(pageNumber - 10, pageNumber)}
      />
    </>
  );
};
export default Articles;
