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
import { BlogPost } from "./pages/BlogPost";
import placeholder1 from "./assets/images/placeholder1.svg";
import placeholder2 from "./assets/images/placeholder2.svg";
import placeholder3 from "./assets/images/placeholder3.svg";

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
          <Route
            path="/buisness/blog/post-1"
            element={
              <BlogPost
                title="10 Quick Tips About Blogging"
                image={placeholder1}
              />
            }
          />
          <Route
            path="/buisness/blog/post-2"
            element={
              <BlogPost
                title="15 Best Blogs To Follow About Web Design"
                image={placeholder2}
              />
            }
          />
          <Route
            path="/buisness/blog/post-3"
            element={
              <BlogPost
                title="7 of the Best Examples of Beautiful Blog Design"
                image={placeholder3}
              />
            }
          />
          <Route
            path="/buisness/blog/post-4"
            element={
              <BlogPost
                title="5 Principles Of Effective Web Design"
                image={placeholder1}
              />
            }
          />
          <Route
            path="/buisness/blog/post-5"
            element={
              <BlogPost
                title="14 Common Problems with modern Web Design"
                image={placeholder2}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
