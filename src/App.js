import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
