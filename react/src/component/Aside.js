import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Aside() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch("/rest/projects", { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data);
      });
  }, []);
  return (
    <aside>
      <div>
        <ol className="aside_ol">
          <li>
            <Link to="/communication">
              <h3>Communication</h3>
            </Link>
          </li>
          <li>
            <Link to="/Archiving">
              <h3>Archiving</h3>
            </Link>
          </li>
          <li>
            <Link to="/projectList">
              <h3>Project</h3>
            </Link>
          </li>
          <ol className="project_ol">
            {title.map((title) => {
              return (
                <li>
                  <Link to={`/${title}`}>
                    <h4>{title}</h4>
                  </Link>
                </li>
              );
            })}
          </ol>
        </ol>
      </div>
    </aside>
  );
}
