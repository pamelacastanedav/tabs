import React from "react";
import styles from "./TabComponent.module.css";
import TabComponent from "./TabComponent";

const ShowComponent = (props) => {
  //   const[(result, setResult)] = useState("");
  {
    props.box.map((item, index) => {
      return (
        <div key={index} className={styles.box}>
          {item}
        </div>
      );
    });
  }
};

export default ShowComponent;
