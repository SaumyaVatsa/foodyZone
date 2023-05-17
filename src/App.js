import { Home, Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
    </Routes>
  </Router>
}

export default App;
