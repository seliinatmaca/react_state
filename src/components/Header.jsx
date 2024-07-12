import { useState } from "react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  // koyu mod mu olucak? state'i
  //const [isDarkMode, setIsDarkMode] = useState(true);

  //console.log(isDarkMode);

  return (
    <header
      //style={{ background: "black" }}
      //style={{ background: isDarkMode === true ? "black" : "white" }}
      className="d-flex justify-content-between align-items-center border px-4 py-2 rounded-1"
    >
      <h1>STATE</h1>

      <div className="d-flex gap-3">
        <label>Koyu Mod</label>
        <input
          //onChange={(event) => console.log(event)}
          //onChange={(event) => console.dir(event.target)}
          //onChange={(event) => console.dir(event.target.checked)}
          onChange={(event) => setIsDarkMode(event.target.checked)}
          checked={isDarkMode}
          className="form-check-input"
          type="checkbox"
        />
      </div>
    </header>
  );
};

export default Header;
