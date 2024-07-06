import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          {/* *は該当しないページ全てという意味 */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;