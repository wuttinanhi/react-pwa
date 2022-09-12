import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import "./App.css";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;
      <a href="http://google.com">Google</a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
