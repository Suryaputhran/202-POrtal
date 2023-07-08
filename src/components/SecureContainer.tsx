import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SecureContainer.module.css";

type SecureContainerType = {
  appDescription?: string;
  passwordManagementDescrip?: string;
  appFeatures?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const SecureContainer: FunctionComponent<SecureContainerType> = ({
  appDescription,
  passwordManagementDescrip,
  appFeatures,
  propTop,
  propLeft,
}) => {
  const workStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.work} style={workStyle}>
      <img className={styles.maskGroupIcon} alt="" src={appDescription} />
      <div className={styles.heading3EspiraMedicineParent}>
        <div className={styles.heading3}>{passwordManagementDescrip}</div>
        <div className={styles.category}>{appFeatures}</div>
      </div>
    </div>
  );
};

export default SecureContainer;
