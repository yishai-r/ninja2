import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/createpage" element={<CreatePage />} />
          <Route path="*" element={<Home />} />

        </Routes>


      </BrowserRouter>




    </div>
  );
}

export default App;
