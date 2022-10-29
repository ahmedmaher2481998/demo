import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormLogIn from "./components/FormLogIn";
import FormOpt from "./components/FormOpt";
import FormSignUp from "./components/FormSignUp";
import FormSignUpMain from "./components/FormSignUpMain";
import FormSignUpFinal from "./components/FormSignUpFinal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/sign-in" element={<FormLogIn />} />
          <Route path="/opt" element={<FormOpt />} />
          <Route path="/sign-up" element={<FormSignUpMain />} />
          <Route path="/personal-details" element={<FormSignUp />} />
          <Route path="/final" element={<FormSignUpFinal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
