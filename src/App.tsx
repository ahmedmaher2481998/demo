import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormLogIn from "./components/FormLogIn";
import FormOpt from "./components/FormOpt";
import FormSignUp from "./components/FormSignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/log-in" element={<FormLogIn />} />
          <Route path="/opt" element={<FormOpt />} />
          <Route path="/sign-up" element={<FormSignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
