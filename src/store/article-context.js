import { createContext, useState } from "react";

const ArticleContext = createContext({
  articles: [],
  total: 0,
  addToarticleHandler: (articles) => {},
});

export function ArticleContextProvider(props) {
  const [article, Setarticle] = useState([]);

  function addToarticleHandler(articles) {
   return  Setarticle((prev) => {
      return [...prev, ...articles];
    });
  }

  let context = {
    articles: article,
    total: article.length,
    addToarticleHandler: addToarticleHandler,
  };

  return (
    <ArticleContext.Provider value={context}>
      {props.children}
    </ArticleContext.Provider>
  );
}


export default ArticleContext