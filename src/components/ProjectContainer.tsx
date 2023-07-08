import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ProjectContainer.module.css";

type ProjectContainerType = {
  projectName?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const ProjectContainer: FunctionComponent<ProjectContainerType> = ({
  projectName,
  propTop,
  propLeft,
}) => {
  const work1Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.work} style={work1Style}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group6@2x.png" />
      <div className={styles.heading3EspiraMedicineParent}>
        <div className={styles.heading3}>{projectName}</div>
        <div className={styles.category}>Category</div>
      </div>
    </div>
  );
};

export default ProjectContainer;
