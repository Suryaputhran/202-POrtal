import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SecureContainer from "../components/SecureContainer";
import ProjectContainer from "../components/ProjectContainer";
import Container202 from "../components/Container202";
import ContainerFooterHome from "../components/ContainerFooterHome";
import styles from "./Portal.module.css";
const Portal: FunctionComponent = () => {
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

  const onLinkContainer10Click = useCallback(() => {
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
    <div className={styles.portal}>
      <img className={styles.portalChild} alt="" src="/frame-27.svg" />
      <img className={styles.portalItem} alt="" src="/frame-26.svg" />
      <div className={styles.portalInner} />
      <img
        className={styles.futureOfArtificialIntelligeIcon}
        alt=""
        src="/future-of-artificial-intelligence-1@2x.png"
      />
      <div className={styles.shapeABrighterParent}>
        <div className={styles.shapeABrighter}>{`Shape a brighter `}</div>
        <div className={styles.shapeABrighter}>digital tomorrow</div>
        <div className={styles.shapeABrighter}>with innovative solutions</div>
      </div>
      <div className={styles.specializingIn}>specializing in</div>
      <div className={styles.cyberSecurityItContainer}>
        <p
          className={styles.cyberSecurityIt}
        >{`cyber security, IT infrastructure, and `}</p>
        <p className={styles.cyberSecurityIt}>{`Robotics & Automation.`}</p>
      </div>
      <div className={styles.sayHi}>say hi</div>
      <div className={styles.link}>info@202portal.com</div>
      <div className={styles.divheroLineTop} />
      <div className={styles.ourTeamOfContainer}>
        <p className={styles.cyberSecurityIt}>
          Our team of IoT specialists, industry experts, and innovative software
          developers drives operational optimization and digital transformation.
        </p>
      </div>
      <div className={styles.divheroDetailsLine} />
      <div className={styles.overview}>Overview</div>
      <div className={styles.divseparator} />
      <div className={styles.portalALeading}>
        202 Portal, a leading technology solutions provider based in Dubai. We
        are at the forefront of innovation, empowering businesses in the MENA
        region with cutting-edge technologies and strategic partnerships. Our
        mission is to drive digital transformation and deliver tailored
        solutions that address the unique challenges of today's rapidly evolving
        world.
      </div>
      <div className={styles.at202Portal}>
        At 202 Portal, we have formed strategic alliances and joint ventures
        with vendors from around the globe, including renowned technology
        companies. These partnerships allow us to offer a comprehensive range of
        services across various industries, revolutionizing the way businesses
        operate and unlocking their full potential.
      </div>
      <div className={styles.link1}>
        <img
          className={styles.cabdd6171493d0b8b655dArrowsvIcon}
          alt=""
          src="/639cabdd6171493d0b8b655d-arrowsvg1.svg"
        />
        <div className={styles.discoverOurWork}>DISCOVER OUR WORK</div>
      </div>
      <div className={styles.divwLayoutGrid}>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.heading2}>
          <div className={styles.howDoWeContainer}>
            <span className={styles.howDoWeContainer1}>
              <p className={styles.cyberSecurityIt}>How do we build</p>
              <p className={styles.cyberSecurityIt}>your story?</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.divwNodeA06b6fc3Afc0Daae}>
        <div className={styles.innovativeOfferingsAi}>
          Innovative Offerings: AI, Biotech, Robotics, Green Energy, Space
          Advancements
        </div>
      </div>
      <div className={styles.linkParent}>
      <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div}>01</div>
            <div className={styles.divoverflowHidden2}>
              <div className={styles.heading32}>Artificial Intelligence</div>
            </div>
          </div>
        </div>
        
        <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div}>02</div>
            <div className={styles.divoverflowHidden}>
              <div className={styles.heading3}>Biotechnology</div>
            </div>
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div}>03</div>
            <div className={styles.divoverflowHidden2}>
              <div className={styles.heading32}>Autonomous Robotics</div>
            </div>
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div}>04</div>
            <div className={styles.divoverflowHidden2}>
              <div className={styles.heading32}>Green Energy</div>
            </div>
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div}>05</div>
            <div className={styles.divoverflowHidden2}>
              <div className={styles.heading32}>Space Technology</div>
            </div>
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.divserviceNameWrap}>
            <div className={styles.div} />
            <div className={styles.divoverflowHidden2}>
              <div className={styles.heading32}>View All</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.linkIcon} alt="" src="/link1.svg" />
      <img
        className={styles.divwNode5917848bA5a9Aa66Icon}
        alt=""
        src="/divwnode-5917848ba5a9aa66cc37f902d8007f9ad8007f97.svg"
      />
      <div className={styles.theJourneyOfContainer}>
        <p className={styles.cyberSecurityIt}>The Journey of</p>
        <p className={styles.cyberSecurityIt}>202 Portal</p>
      </div>
      <div className={styles.portalWasFounded}>
        202 Portal was founded in Dubai with a vision to revolutionize the
        technology landscape and drive innovation across industries. Since our
        inception, we have established ourselves as a trusted and respected
        holding company, forming strategic alliances and joint ventures with
        leading technology vendors from around the world. Over the years, we
        have built a strong track record of delivering cutting-edge solutions
        that empower businesses to thrive in the digital age.
      </div>
      <div className={styles.divseparator1} />
      <div className={styles.revolutionizeTechnologyLands}>
        *Revolutionize Technology Landscape | Drive Innovation | Trusted Holding
        Company | Strategic Alliances | Leading Technology Vendors |
        Cutting-Edge Solutions | Empowering Businesses in Digital Age
      </div>
      <div className={styles.link8}>
        <img
          className={styles.cabdd6171493d0b8b655dArrowsvIcon1}
          alt=""
          src="/639cabdd6171493d0b8b655d-arrowsvg2.svg"
        />
        <div className={styles.moreAboutUs}>More about us</div>
      </div>
      <div className={styles.link9}>
        <div className={styles.divlinkContentWrap}>
          <div className={styles.getCompanyDeck}>GET COMPANY DECK</div>
          <img
            className={styles.divdownloadArrowWrapIcon}
            alt=""
            src="/divdownloadarrowwrap.svg"
          />
        </div>
        <div className={styles.divbotLineDarktone} />
      </div>
      <div className={styles.whatOurClients}>WHAT OUR CLIENTs SAY</div>
      

      <SecureContainer
        appDescription="/mask-group4@2x.png"
        passwordManagementDescrip="Secure and efficient password management"
        appFeatures="Secure, Efficient, Password Management"
      />
      <SecureContainer
        appDescription="/mask-group5@2x.png"
        passwordManagementDescrip="Application for local communities"
        appFeatures="Mobile Application, Information Center, Dialogue Facilitation, Virtual Market"
        propTop="2252px"
        propLeft="879px"
      />
      <ProjectContainer projectName="Project three" />
      <ProjectContainer
        projectName="Project four"
        propTop="3154px"
        propLeft="879px"
      />
      <div className={styles.portalDrivingDigital}>
        202 Portal Driving Digital Transformation and Empowering Businesses in
        the MENA Region
      </div>
      <Container202 />
      <div className={styles.header} data-scroll-to="headerContainer">
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-33.svg" />
          <div className={styles.portal2}>202 Portal</div>
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
            <div className={styles.insights4 } onClick={onLinkWork1Click}>Services</div>
          </div>
          <div className={styles.insights}>
            <div className={styles.insights4 }  onClick={onLinkWork2Click}>About Us</div>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.link10}>
            <div className={styles.startAProject}>Start a Project</div>
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
      <ContainerFooterHome
        dimensions="/divfooterarrowwrap2.svg"
        dimensionsText="/63cf07a33f4f125387724909-backtotopsvg2.svg"
        dimensionsId="/group-102.svg"
        divfooterArrowWrapBackgroundColor="#400a38"
        propCursor="unset"
        propCursor1="pointer"
        onLinkHomeClick={onLinkHomeClick}
        onLinkWorkClick={onLinkWorkClick}
        onLinkWork1Click={onLinkWork1Click}
        onLinkWork2Click={onLinkWork2Click}
        onLinkContainer1Click={onLinkContainer10Click}
      />
    </div>
  );
};

export default Portal;
