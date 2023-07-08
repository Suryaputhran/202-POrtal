import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerFooterHome.module.css";

type ContainerFooterHomeType = {
  dimensions?: string;
  dimensionsText?: string;
  dimensionsId?: string;

  /** Style props */
  divfooterArrowWrapBackgroundColor?: Property.BackgroundColor;
  propCursor?: Property.Cursor;
  propCursor1?: Property.Cursor;

  /** Action props */
  onLinkHomeClick?: () => void;
  onLinkWorkClick?: () => void;
  onLinkWork1Click?: () => void;
  onLinkWork2Click?: () => void;
  onDivfooterBotWrapContainerClick?: () => void;
  onLinkContainer1Click?: () => void;
};

const ContainerFooterHome: FunctionComponent<ContainerFooterHomeType> = ({
  dimensions,
  dimensionsText,
  dimensionsId,
  divfooterArrowWrapBackgroundColor,
  propCursor,
  propCursor1,
  onLinkHomeClick,
  onLinkWorkClick,
  onLinkWork1Click,
  onLinkWork2Click,
  onDivfooterBotWrapContainerClick,
  onLinkContainer1Click,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: divfooterArrowWrapBackgroundColor,
    };
  }, [divfooterArrowWrapBackgroundColor]);

  const divfooterBotWrapStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const linkStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.linkHomeParent}>
        <div className={styles.linkHome} onClick={onLinkHomeClick}>
          Home
        </div>
        <div className={styles.linkWork} onClick={onLinkWorkClick}>
          Insights
        </div>
        <div className={styles.linkWork} onClick={onLinkWork1Click}>
          Industries
        </div>
        <div className={styles.linkWork} onClick={onLinkWork2Click}>
          About
        </div>
        <div className={styles.contactUs}>Careers</div>
      </div>
      <div className={styles.divwNodeBebeba02Bc61Af4c}>
        <div className={styles.linkLinkedin}>Linkedin</div>
        <div className={styles.linkInstagram}>Instagram</div>
        <div className={styles.linkDribbble}>Facebook</div>
        <div className={styles.linkBehance}>Twitter</div>
      </div>
      <div className={styles.divwNodeBebeba02Bc61Af4c1}>
        <div className={styles.divfooterLinkContainer}>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.link}>info@202portal.com</div>
        </div>
        <div className={styles.divfooterLinkContainer1}>
          <div className={styles.contactUs}>You can find us</div>
          <div className={styles.sultanAhmedNasser}>
            212, Sultan Ahmed Nasser Lootah Building, Al Qusais, Dubai.
          </div>
        </div>
      </div>
      <div className={styles.divdownloadFooterWrap}>
        <div className={styles.downloadCompanyDeck}>Download Company Deck</div>
        <img
          className={styles.divfooterArrowWrapIcon}
          alt=""
          src={dimensions}
        />
      </div>
      <div className={styles.divbotLineDarktone} />
      <div
        className={styles.divfooterBotWrap}
        onClick={onDivfooterBotWrapContainerClick}
        style={divfooterBotWrapStyle}
      >
        <div className={styles.divfooterBotLeft}>
          <div className={styles.portal2023All}>
            © 202 Portal 2023. All rights reserved.
          </div>
          <div className={styles.portal2023All}>Privacy Policy</div>
        </div>
        <div
          className={styles.link1}
          style={linkStyle}
          onClick={onLinkContainer1Click}
        >
          <div className={styles.contactUs}>Back to the top</div>
          <div className={styles.divtopArrowWrap}>
            <img
              className={styles.cf07a33f4f125387724909BackToIcon}
              alt=""
              src={dimensionsText}
            />
          </div>
        </div>
      </div>
      <img className={styles.footerItem} alt="" src={dimensionsId} />
    </div>
  );
};

export default ContainerFooterHome;
