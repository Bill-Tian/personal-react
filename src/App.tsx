import React from "react";
import "@/App.css";
import lessStyles from "./app.module.less";

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles["lessBox"]}>
        <div className={lessStyles["box"]}>lessBox</div>
      </div>
    </div>
  );
}

export default App;
