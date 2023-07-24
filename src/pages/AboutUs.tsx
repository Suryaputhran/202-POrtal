import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFooterHome from "../components/ContainerFooterHome";
import styles from "./AboutUs.module.css";
const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkHomeClick = useCallback(() => {
    navigate("/202-portal");
  }, [navigate]);

  const onLinkWorkClick = useCallback(() => {
    navigate("/Insights");
  }, [navigate]);

  const onLinkWork1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkWork2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onDivfooterBotWrapContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInsightsTextClick = useCallback(() => {
    navigate("/202-portal");
  }, [navigate]);

  const onInsightsText1Click = useCallback(() => {
    navigate("/insights");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <img className={styles.aboutUsChild} alt="" src="/frame-25.svg" />
      <div className={styles.header} data-scroll-to="headerContainer">
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-3.svg" />
          <div className={styles.portal}>202 Portal</div>
        </div>
        <div className={styles.insightsParent}>
          <div className={styles.insights}>
            <div className={styles.insights1} onClick={onInsightsTextClick}>
              Home
            </div>
          </div>
          <div className={styles.insights2} onClick={onInsightsText1Click}>
            Insights
          </div>
          <div className={styles.insights} onClick={onLinkWork1Click}>
            <div className={styles.insights4}>Services</div>
          </div>
          <div className={styles.insights} onClick={onLinkWork2Click} >
            <div className={styles.insights4}>About Us</div>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.link}>
            <div className={styles.startAProject}>Start a Project</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.frameItem} alt="" src="/group-31.svg" />
        <div className={styles.portal1}>202 Portal</div>
      </div>
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.divtrackSeparator} />
      </div>
      <img className={styles.component6Icon} alt="" src="/component-6.svg" />
      <ContainerFooterHome
        dimensions="/divfooterarrowwrap1.svg"
        dimensionsText="/63cf07a33f4f125387724909-backtotopsvg1.svg"
        dimensionsId="/group-101.svg"
        divfooterArrowWrapBackgroundColor="unset"
        propCursor="pointer"
        propCursor1="unset"
        onLinkHomeClick={onLinkHomeClick}
        onLinkWorkClick={onLinkWorkClick}
        onLinkWork1Click={onLinkWork1Click}
        onLinkWork2Click={onLinkWork2Click}
        onDivfooterBotWrapContainerClick={onDivfooterBotWrapContainerClick}
      />
      <div className={styles.portalLlcIsALeadingHoldinParent}>
        <div className={styles.portalLlcIs}>
          202 Portal LLC is a leading holding company based in Dubai,
          specializing in forming strategic alliances and joint ventures with
          vendors from around the world's leading technology companies. With a
          strong focus on innovation, collaboration, and cutting-edge solutions,
          we empower businesses across various industries to thrive in the
          rapidly evolving technological landscape.
        </div>
        <div className={styles.frameInner} />
        <div className={styles.portalLlcIs}>
          At 202 Portal LLC, we believe in the power of strategic partnerships.
          By forging alliances with renowned technology companies, we bring
          together expertise, resources, and diverse perspectives to deliver
          comprehensive solutions that drive business growth and foster
          sustainable success. Our extensive network of global partners enables
          us to offer a wide range of services across multiple sectors.
        </div>
        <div className={styles.frameInner} />
        <div className={styles.portalLlcIs}>
          We are at the forefront of technological advancements, consistently
          exploring emerging trends and breakthrough innovations. Our team of
          experts combines deep industry knowledge with a passion for innovation
          to provide tailored solutions that address the unique challenges and
          opportunities faced by our clients.
        </div>
        <div className={styles.frameInner} />
        <div className={styles.portalLlcIs}>
          Our comprehensive suite of services encompasses a wide array of
          cutting-edge technologies, including AI, Biotech, Autonomous Robotics,
          Green Energy, Space Technology, Quantum, Renewable and Sustainable
          Energy, Cybersecurity, Agrotech, Cloud Computing, Blockchain (Smart
          Contracts), IoT, Industry 4.0, e-commerce and
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
