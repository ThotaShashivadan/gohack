import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className=" m-auto max-w-screen-xl">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
