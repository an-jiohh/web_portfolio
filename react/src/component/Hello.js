import { useState } from "react";

const Hello = (props) => {
  const [name, setName] = useState("Mike");

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }
  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name}
        {props.age}
      </h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Hello;
