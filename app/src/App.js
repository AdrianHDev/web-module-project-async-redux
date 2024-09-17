import "./App.css";
import Trivia from "./components/Trivia";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        background: "#9C42B8",
      }}
      className="App"
    >
      <Trivia />
    </div>
  );
}

export default App;
