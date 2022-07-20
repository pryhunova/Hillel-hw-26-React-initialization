import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm Header</p>
      </header>
      <div className="App-container">
        <aside className="App-sidebar">
          <p>I'm Sidebar</p>
        </aside>
        <main className="App-main-container">
          <p>I'm MainContainer</p>
        </main>
      </div>
    </div>
  );
}

export default App;
