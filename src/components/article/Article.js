import ArticleItem from "./ArticleItem";

const Article = (props) => {
  return (
    <>
      {props.data.map((element) => (
        <ArticleItem data={element} />
      ))}
    </>
  );
};
export default Article;
