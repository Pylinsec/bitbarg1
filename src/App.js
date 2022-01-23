import "./App.css";
import Header1 from "./components/header";
import Main1 from "./components/main1";

function App() {
  return (
    <div className="App">
      <body className="main_container">
        <header>{Header1()}</header>
        <main>{Main1()}</main>
      </body>
    </div>
  );
}

export default App;
