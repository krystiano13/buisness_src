import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./molecules/Navbar/Navbar";

const App = () => {
  const [portrait,setPortrait] = React.useState<boolean>(false);
  React.useEffect(() => {
    const media = window.matchMedia("(orientation : portrait)");
    setPortrait(media.matches);
    window.matchMedia("(orientation : portrait)").addEventListener('change', (e) => {
      setPortrait(e.matches);
    });
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar portrait={portrait}/>
        <Routes>
          <Route path="/buisness/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
