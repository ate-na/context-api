import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ArticleContextProvider } from "./context/article-context";

ReactDOM.render(
  <BrowserRouter>
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
