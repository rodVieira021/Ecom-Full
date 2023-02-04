import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Pages/Main.jsx";
import Nav from "./Components/Partials/Nav.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
