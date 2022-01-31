import "./App.css";
import Header1 from "./components/header";
import Main1 from "./components/main1";
import { Routes, Route, Link } from "react-router-dom";
import Data1 from "./components/dataexchange/data.js";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <body className="main_container">
        <header>{Header1()}</header>
        <main>{Main1()}</main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="./components/about/about" element={<About />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
