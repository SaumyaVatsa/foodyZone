import { Home, Login, Signup } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/createUser" element= {<Signup/>}/>
    </Routes>
  </Router>
}

export default App;
