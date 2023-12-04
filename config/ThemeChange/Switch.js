import React, { useContext } from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";

import ThemeContext from "./ThemeContext";

const Switch = (props) => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <button className="Switch" onClick={() => toggle()}>
      {!dark ? (
        <Sun className={`icon ${!dark ? "active" : ""}`} />
      ) : (
        <Moon className={`icon ${dark ? "active" : ""}`} />
      )}
    </button>
  );
};
export default Switch;
