import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/components/pages/Home";
import Wishlist from "../src/components/pages/Wishlist";

const App = () => {
  return (
    <Router>
      <nav className="flex lg:w-screen justify-between px-20">
        <Link to="/" className="mr-4 text-2xl">Home</Link>
        <Link to="/wishlist" className="text-2xl">Wishlist</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;