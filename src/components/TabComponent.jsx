import React from "react";
import styles from "./TabComponent.module.css";
import { useState } from "react";

const TabComponent = (props) => {
  const [displayContent, setDisplayContent] = useState("");
  const onClickHandler = (e, item) => {
    setDisplayContent(item.content);
  };
  return (
    <div>
      {props.tabs.map((item, index) => (
        <button className={styles.tab} onClick={(e) => onClickHandler(e, item)}>
          {item.name}
        </button>
      ))}
      <p>{displayContent}</p>
    </div>
  );
  //   return props.tabs.map((item, index) => (

  //       <button className={styles.tab} onClick={(e) => onClickHandler(e, item)}>
  //         {item.name}
  //       </button>
  //     </div>
  //   ));
};

//

export default TabComponent;
