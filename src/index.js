import ReactDOM from "react-dom/client";
import List from "./components/List";

function App() {
  // return <h1>Rick and Morty</h1>;
  return (
    <div>
      <h1>Rick and Mortyy</h1>
      <List />
    </div>
  );
}

const container = document.getElementById("root");
// console.log("Container " + container);
const root = ReactDOM.createRoot(container);
// console.log("Root " + root);
root.render(<App />);
