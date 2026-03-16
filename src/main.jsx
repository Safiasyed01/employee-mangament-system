
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Authcontext from "./context/Authcontext";
import Taskconyext from "./context/Taskconyext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authcontext>
      <Taskconyext>
        <App />
      </Taskconyext>
    </Authcontext>
  </React.StrictMode>
);
