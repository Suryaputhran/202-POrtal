import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./PasswordContainer.module.css";

type PasswordContainerType = {
  passwordManagementText?: string;
  communityAppText?: string;
  passwordManagementDescrip?: string;

  /** Style props */
  propDisplay?: Property.Display;
  propAlignItems?: Property.AlignItems;
  propWidth?: Property.Width;
};

const PasswordContainer: FunctionComponent<PasswordContainerType> = ({
  passwordManagementText,
  communityAppText,
  passwordManagementDescrip,
  propDisplay,
  propAlignItems,
  propWidth,
}) => {
  const categoryStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      alignItems: propAlignItems,
      width: propWidth,
    };
  }, [propDisplay, propAlignItems, propWidth]);

  return (
    <div className={styles.work}>
      <img
        className={styles.maskGroupIcon}
        alt=""
        src={passwordManagementText}
      />
      <div className={styles.heading3EspiraMedicineParent}>
        <div className={styles.heading3}>{communityAppText}</div>
        <div className={styles.category} style={categoryStyle}>
          {passwordManagementDescrip}
        </div>
      </div>
    </div>
  );
};

export default PasswordContainer;
