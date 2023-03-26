import { useContext, useEffect } from "react";
import ArticleContext from "../context/article-context";
import Article from "../components/article/Article";
import { getArticle } from "../services/article-service";

const Home = () => {
  const articleContext = useContext(ArticleContext);

  useEffect(() => {
    console.log(articleContext);
    if (articleContext.total === 0) {
      getArticle(10).then((value) => {
        articleContext.addToarticleHandler(value);
      });
    }
  }, [articleContext]);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {console.log("article", articleContext.articles)}

        <Article data={articleContext.articles.slice(0, 10)} />
      </ul>
    </>
  );
};
export default Home;
