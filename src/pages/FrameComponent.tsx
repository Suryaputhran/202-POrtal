import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.servicesParent}>
      <div className={styles.services}>Services</div>
      <div className={styles.divtrackSeparator} />
    </div>
  );
};

export default FrameComponent;
