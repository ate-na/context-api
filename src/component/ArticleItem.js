const ArticleItem = (props) => {
  return (
    <>
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
    </>
  );
};

export default ArticleItem;
