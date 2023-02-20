import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Navbar } from "./molecules/Navbar/Navbar";
import { Team } from "./pages/Team";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";

const App = () => {
  const [portrait, setPortrait] = React.useState<boolean>(false);
  React.useEffect(() => {
    const media = window.matchMedia("(orientation : portrait)");
    setPortrait(media.matches);
    window
      .matchMedia("(orientation : portrait)")
      .addEventListener("change", (e) => {
        setPortrait(e.matches);
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar portrait={portrait} />
        <Routes>
          <Route path="/buisness/" element={<Home />} />
          <Route path="/buisness/about" element={<About />} />
          <Route path="/buisness/work" element={<Work />} />
          <Route path="/buisness/team" element={<Team />} />
          <Route path="/buisness/blog" element={<Blog />} />
          <Route path="/buisness/contact" element={<Contact />} />
          <Route
            path="/buisness/work/project-1"
            element={<Project projectId={1} />}
          />
          <Route
            path="/buisness/work/project-2"
            element={<Project projectId={2} />}
          />
          <Route
            path="/buisness/work/project-3"
            element={<Project projectId={3} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
