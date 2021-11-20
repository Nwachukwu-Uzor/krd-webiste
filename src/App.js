import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import SinglePost from "./pages/Blog/SinglePost/SinglePost";
import NotFound from "./pages/NotFound/NotFound";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
