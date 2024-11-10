import Home from "./Pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Language from "./Pages/Language";
import { Word } from "./Components/Data";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language" element={<Language word={Word[0]} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
