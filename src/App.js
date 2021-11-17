import { useState } from "react";
import "./App.css";
import UserInput from "./UserInput";

function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("Change Me!!");

  //? Setting input value on every Key press Event
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onButtonClick = () => {
    if (value === "") return false; // ? Preventing click and Submit if there is no value in Inputbox

    setText(value);
    setValue("");
  };

  return (
    <div className="App">
      <UserInput
        handleInputChange={handleChange}
        getUpdateText={text}
        onButtonClick={onButtonClick}
        inputValue={value}
      />
    </div>
  );
}

export default App;
