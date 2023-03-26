import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

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
