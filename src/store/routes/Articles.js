import { useContext, useEffect, useState } from "react";
import Article from "../../component/Article";
import ArticleContext from "../article-context";

const Articles = () => {
  const [pageNumber, SetpageNumber] = useState(10);
  const articleContext = useContext(ArticleContext);

  useEffect(() => {
    if (pageNumber > articleContext.total) {
      console.log("pageNumber", pageNumber, articleContext.total);
      fetch(`http://localhost:3001/api/todo?page=${pageNumber}`, {
        method: "GET",
      }).then(async (e) => {
        const data = await e.json();
        console.log("data", data);
        articleContext.addToarticleHandler(data.data);
      });
    } else {
      console.log("pageNumber", pageNumber);
      console.log("total", articleContext.total);
    }
  });

  const changePage = () => {
    SetpageNumber((pre) => pre + 10);
  };

  return (
    <>
      <h1>Article</h1>
      <button onClick={changePage}>{pageNumber}</button>
      <Article data={articleContext.articles.slice(pageNumber - 10, pageNumber)} />
    </>
  );
};
export default Articles;
