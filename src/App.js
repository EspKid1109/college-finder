import logo from "./logo.svg";
import "./App.css";
import Sidebox from "./Components/Sidebox";
import Headerbox from "./Components/Headerbox";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebox />
        <Headerbox />
      </header>
    </div>
  );
}

export default App;
