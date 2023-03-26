import { useContext, useEffect, useState } from "react";
import ArticleContext from "../article-context";
import Article from "../../component/Article";

const Home = () => {
  const articleContext = useContext(ArticleContext);
  // const [article, Setarticle] = useState([]);

  useEffect(() => {
    console.log(articleContext);
    if (articleContext.total === 0) {
      fetch(`http://localhost:3001/api/todo?page=${10}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then(async (res) => {
        const data = await res.json();
        // Setarticle((pre) => {
        //   return [...pre, data.data];
        // });
        articleContext.addToarticleHandler(data.data);
      });
    }
    // } else if (article.length === 0) {
    //   Setarticle((prevState) => {
    //     return [...prevState, ...articleContext.articles];
    //   });
    // }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {console.log("article", articleContext.articles)}

        <Article data={articleContext.articles.slice(0,10)} />
      </ul>
    </>
  );
};
export default Home;
