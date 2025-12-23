import { Route, Routes } from "react-router-dom";
import { Toaster } from "@src/components/ui/toaster";
import { TooltipProvider } from "../src/components/ui/tooltip"
import Navigation from "@src/components/Navigation";
import Footer from "@src/components/Footer";
import Home from "@src/pages/Home";
import Works from "@src/pages/Works";
import About from "@src/pages/About";
import Blog from "@src/pages/Blog";
import Contact from "@src/pages/Contact";
import NotFound from "@src/pages/not-found";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/works" element={<Works/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route element={<NotFound/>} />
    </Routes>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Navigation />
        <Router />
        <Footer />
        <Toaster />
      </TooltipProvider>
  );
}

export default App;
