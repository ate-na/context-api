const ArticleItem = (props) => {
  const { title, description } = props.data;
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
};

export default ArticleItem;
