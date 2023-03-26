import { Link } from "react-router-dom";

const Layout = () => {
  return (
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
            listStyle: "none",
          }}
        >
          <li style={{ listStyle: "none", paddingInline: "20px" }}>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/article"}>Article</Link>
          </li>
        </ul>
      </nav>
  );
};
export default Layout;
