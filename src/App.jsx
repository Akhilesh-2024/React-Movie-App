import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar"
import Favorites from "./Pages/Favorites";
import './css/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
