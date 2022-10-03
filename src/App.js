import { useState } from "react";
import "./App.css";

import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import Project from "./Components/Project";
import Announcement from "./Components/Announcement";
import People from "./Components/People";
import Footer from "./Components/Footer";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="App">
      <SideBar isToggled={toggleMenu} toggleMenu={toggleNav} />
      <main className="content">
        <TopBar toggleMenu={toggleNav} />
        <section className="main-content">
          <article className="project-section">
            <Project />
          </article>
          <aside className="right-panel">
            <Announcement />
            <People />
          </aside>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
