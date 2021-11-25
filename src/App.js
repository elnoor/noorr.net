import "./assets/scss/customizedBootstrap.scss";
import "./assets/scss/style.scss";
import RoutesList from "./components/_Others/RoutesList";
import Layout from "./components/_Others/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesList />
      </Layout>
    </BrowserRouter>
  );
}
