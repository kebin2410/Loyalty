import React, { useContext } from "react";
// import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import { LuSun as Sun, LuMoon as Moon } from "react-icons/lu";
import ThemeContext from "./ThemeContext";

const Switch = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div className="mx-2">
      <button className="Switch" onClick={() => toggle()}>
        {!dark ? <Sun strokeWidth="3px" size="3em" className="change-mode" /> : <Moon strokeWidth="3px" size="3em" className="change-mode" />}
      </button>
    </div>
  );
};
export default Switch;
