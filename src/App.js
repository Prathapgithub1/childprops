import logo from './logo.svg';
import './App.css';

function App(props) {
  console.dir(props)
  return (
    <div>
      {/* props.children is nothing but we can access the children from index.js */}
      <h1 style={{ color: 'black', display: "flex", gap: "20px" }}>{props.children}</h1>
      <h1>{props.name}</h1>
    </div>
  )
}

export default App;
