import "./App.scss";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MainContainer } from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
