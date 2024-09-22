import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Data from "./data.js";

function App() {
  const [index, setIndex] = useState(0);

  // TODO : TAKE THE DATA FROM API AND ADD ABILITY TO TAKE THE MEME by download it someHow
  let data = Data.data;
  function handleClick() {
    setIndex((prev) => {
      return (prev = Math.floor(Math.random() * 100));
    });
    console.log(data.memes[index].name);
  }

  console.log(data);

  return (
    <>
      <Header />
      <Form func={handleClick} url={data.memes[index].url} />
    </>
  );
}

export default App;
