import "./Styles/App.css";
import "./Styles/Reusable.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Nav from "./Components/Partials/Nav";

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
