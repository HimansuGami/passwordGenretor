import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllwed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {}, [
    length,
    numberAllowed,
    charactersAllowed,
    setPassword,
  ]);
  return (
    <>
      <h1 className="text-center text-4xl text-black">Password Generator</h1>
    </>
  );
}

export default App;
