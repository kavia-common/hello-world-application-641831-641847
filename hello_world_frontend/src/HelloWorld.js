import React from "react";
import "./HelloWorld.css";

// PUBLIC_INTERFACE
function HelloWorld() {
  /** 
   * Displays a centered "Hello World" message with minimalistic styling 
   * and theme colors as specified in project configuration.
   * Responsive and accessible.
   */
  return (
    <div className="hello-world-root">
      <div className="hello-world-message" role="main" aria-label="Hello World">
        Hello World
      </div>
    </div>
  );
}

export default HelloWorld;
