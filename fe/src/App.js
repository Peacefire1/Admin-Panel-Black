import "./App.css";
import { Space } from "antd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
