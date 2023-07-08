import { FunctionComponent } from "react";
import styles from "./Link.module.css";
const Link: FunctionComponent = () => {
  return (
    <div className={styles.link}>
      <img
        className={styles.cabdd6171493d0b8b655dArrowsvIcon}
        alt=""
        src="/639cabdd6171493d0b8b655d-arrowsvg.svg"
      />
      <div className={styles.startAProject}>Start a Project</div>
    </div>
  );
};

export default Link;
