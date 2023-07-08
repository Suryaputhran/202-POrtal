import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.aboutUsParent}>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.divtrackSeparator} />
    </div>
  );
};

export default FrameComponent1;
