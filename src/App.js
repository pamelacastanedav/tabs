import logo from "./logo.svg";
import "./App.css";
import TabComponent from "./components/TabComponent";
import { useState } from "react";
import ShowComponent from "./components/ShowComponent";

function App() {
  //create variable to create the tabs
  const [tabs, setTabs] = useState([
    { name: "tab1", content: "Content of Tab 1" },
    { name: "tab2", content: "Content of Tab 2" },
    { name: "tab3", content: "Content of Tab 3" },
  ]);
  return (
    <div className="App">
      <TabComponent tabs={tabs} />
      {/* <ShowComponent /> */}
    </div>
  );
}

export default App;
