import ReactDOM from "react-dom/client";

function App() {
  return <h1>Rick and Morty</h1>;
}

const container = document.getElementById("root");
// console.log("Container " + container);
const root = ReactDOM.createRoot(container);
// console.log("Root " + root);
root.render(<App />);
