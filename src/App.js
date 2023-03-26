import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Articles from "./store/routes/Articles";
import Home from "./store/routes/Home";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Articles />} path="/article" />
      </Routes>
    </>
  );
}
export default App;
