import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFooterHome from "../components/ContainerFooterHome";
import styles from "./Services.module.css";
const Services: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkHomeClick = useCallback(() => {
    navigate("/202-portal");
  }, [navigate]);

  const onLinkWorkClick = useCallback(() => {
    navigate("/insights");
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
    
    <div className={styles.services}>
      <img className={styles.servicesChild} alt="" src="/frame-25.svg" />
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
          <div className={styles.insights}>
            <div className={styles.insights4} onClick={onLinkWork1Click}>Services</div>
          </div>
          <div className={styles.insights}>
            <div className={styles.insights4} onClick={onLinkWork2Click}>About Us</div>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.link}>
            <div className={styles.startAProject}>Start a Project</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.servicesParent}>
        <div className={styles.services1}>Services</div>
        <div className={styles.divtrackSeparator} />
      </div>
      <img className={styles.component6Icon} alt="" src="/component-6.svg" />
      <ContainerFooterHome
        dimensions="/divfooterarrowwrap.svg"
        dimensionsText="/63cf07a33f4f125387724909-backtotopsvg.svg"
        dimensionsId="/group-10.svg"
        onLinkHomeClick={onLinkHomeClick}
        onLinkWorkClick={onLinkWorkClick}
        onLinkWork1Click={onLinkWork1Click}
        onLinkWork2Click={onLinkWork2Click}
        onDivfooterBotWrapContainerClick={onDivfooterBotWrapContainerClick}
      />
      <div className={styles.weOfferA}>
        We offer a comprehensive range of cutting-edge technology solutions
        across various domains, empowering businesses in the MENA region to
        thrive in the digital age. Explore our service categories below to
        discover how we can help you drive innovation, streamline operations,
        and achieve your business objectives.
      </div>
      <div className={styles.ourAiCapabilities}>
        Our AI capabilities encompass machine learning, natural language
        processing, computer vision, and predictive analytics. Our team of data
        scientists and AI experts develop intelligent systems and algorithms
        that can automate processes, extract valuable insights from data,
        enhance decision-making, and improve customer experiences.
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>01</div>
        <div className={styles.heading2FearlessMindsetParent}>
          <div className={styles.heading2}>AI (Artificial Intelligence)</div>
          <div className={styles.at202Portal}>
            At 202 Portal, we harness the power of artificial intelligence to
            revolutionize businesses. Our capabilities include developing AI
            algorithms, machine learning models, and natural language processing
            systems. We can help you leverage AI to automate processes, gain
            actionable insights from data, enhance customer experiences, and
            optimize decision-making in real-time. We believe AI is the
            cornerstone of the future, and we're dedicated to unlocking its
            transformative potential for your organization.
          </div>
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.heading21}>Work in progress!</div>
      <div className={styles.heading22}>Work in progress!</div>
      <div className={styles.heading23}>Work in progress!</div>
      <div className={styles.capabilities}>Capabilities:</div>
    </div>
  );
};

export default Services;
