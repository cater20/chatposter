
import React from "react";

 function Navbar({ isDarkMode, onToggleDarkMode }){
return(
<Navbar>
<h1>Chatterbox</h1>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          checked={isDarkMode}
          onChange={(e) => onToggleDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>



</Navbar>
)
 }
 export default Navbar
