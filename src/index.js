import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";

function App() {
  // return <h1>Rick and Morty</h1>;
  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">Rick and Mortyy</h1>
      </nav>
      <List />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
