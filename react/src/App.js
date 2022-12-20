import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Aside from "./component/Aside";
import About from "./component/About";
import Archiving from "./component/Archiving";
import ProjectList from "./component/ProjectList";
import Project from "./component/Project";
import Communication from "./component/Communication";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import DayList from "./component/DayList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/archiving" element={<Archiving />} />
          <Route path="/projectList" element={<ProjectList />} />
          <Route path="/:title" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
