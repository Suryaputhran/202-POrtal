import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PasswordContainer from "../components/PasswordContainer";
import ContainerFooterHome from "../components/ContainerFooterHome";
import styles from "./Insights.module.css";
const Insights: FunctionComponent = () => {
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

  const onLinkContainer1Click = useCallback(() => {
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
    <div className={styles.insights}>
      <img className={styles.insightsChild} alt="" src="/frame-251.svg" />
      <div className={styles.insightsItem} />
      <div className={styles.header} data-scroll-to="headerContainer">
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-32.svg" />
          <div className={styles.portal}>202 Portal</div>
        </div>
        <div className={styles.insightsParent}>
          <div className={styles.insights1}>
            <div className={styles.insights2} onClick={onInsightsTextClick}>
              Home
            </div>
          </div>
          <div className={styles.insights3} onClick={onInsightsText1Click}>
            Insights
          </div>
          <div className={styles.insights1}>
            <div className={styles.insights5}>Services</div>
          </div>
          <div className={styles.insights1}>
            <div className={styles.insights5}>About Us</div>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.link}>
            <div className={styles.startAProject}>Start a Project</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.insightsGroup}>
        <div className={styles.insights8}>Insights</div>
        <div className={styles.divtrackSeparator} />
      </div>
      <div className={styles.theseAreJustAFewExamplesParent}>
        <div className={styles.theseAreJust}>
          These are just a few examples of the industries we serve. At 202
          Portal LLC, we have the flexibility and expertise to adapt our
          services to meet the unique needs of various industries. Contact us
          today to explore how our technology solutions can empower your
          organization to thrive in the digital age.
        </div>
        <div className={styles.divtrackSeparator1} />
      </div>
      <img className={styles.component6Icon} alt="" src="/component-6.svg" />
      <img className={styles.linkIcon} alt="" src="/link.svg" />
      <div className={styles.workParent}>
        <PasswordContainer
          passwordManagementText="/mask-group@2x.png"
          communityAppText="Secure and efficient password management"
          passwordManagementDescrip="Secure, Efficient, Password Management"
        />
        <PasswordContainer
          passwordManagementText="/mask-group1@2x.png"
          communityAppText="Application for local communities"
          passwordManagementDescrip="Mobile Application, Information Center, Dialogue Facilitation, Virtual Market"
          propDisplay="inline-block"
          propAlignItems="unset"
          propWidth="unset"
        />
        <PasswordContainer
          passwordManagementText="/mask-group2@2x.png"
          communityAppText="Project three"
          passwordManagementDescrip="Category"
          propDisplay="flex"
          propAlignItems="center"
          propWidth="249.05px"
        />
        <PasswordContainer
          passwordManagementText="/mask-group3@2x.png"
          communityAppText="Project four"
          passwordManagementDescrip="Category"
          propDisplay="flex"
          propAlignItems="center"
          propWidth="249.05px"
        />
      </div>
      <div className={styles.ourPortfolio}>Our Portfolio</div>
      <div className={styles.div}>01</div>
      <img className={styles.insightsInner} alt="" src="/group-20@2x.png" />
      <div className={styles.heading2}>Finance</div>
      <div className={styles.inTheFinance}>
        In the finance industry, technology plays a crucial role in enabling
        secure transactions, optimizing processes, and providing seamless
        customer experiences. 202 Portal offers a range of solutions for
        financial institutions, including AI-powered fraud detection systems,
        blockchain-based smart contracts, secure data management, and digital
        banking solutions. Partner with us to enhance operational efficiency,
        improve risk management, and deliver innovative financial services.
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>02</div>
        <img className={styles.frameItem} alt="" src="/group-201@2x.png" />
        <div className={styles.heading21}>Healthcare</div>
        <div className={styles.inTheHealthcare}>
          In the healthcare industry, technology has the power to improve
          patient care, enhance diagnostics, and streamline healthcare
          operations. Our solutions for the healthcare sector include
          telemedicine platforms, electronic health record systems, AI-enabled
          diagnostics, and remote patient monitoring. By leveraging our
          expertise, healthcare organizations can enhance patient outcomes,
          improve operational efficiency, and transform the delivery of
          healthcare services.
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.group}>
          <div className={styles.div1}>03</div>
          <img className={styles.frameItem} alt="" src="/group-202@2x.png" />
          <div className={styles.heading21}>Manufacturing</div>
          <div className={styles.inTheHealthcare}>
            Manufacturing organizations are increasingly embracing digital
            technologies to optimize production processes, improve supply chain
            management, and achieve higher levels of efficiency. 202 Portal
            provides manufacturing solutions such as IoT-enabled factory
            automation, predictive maintenance systems, supply chain
            optimization, and digital twin technologies. We empower
            manufacturers to increase productivity, reduce costs, and drive
            innovation across their operations.
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>04</div>
          <img className={styles.frameItem} alt="" src="/group-203@2x.png" />
          <div className={styles.heading21}>Energy</div>
          <div className={styles.inTheHealthcare}>
            In the energy industry, the transition to renewable and sustainable
            energy sources is becoming a top priority. Our energy solutions
            include smart grid systems, renewable energy management platforms,
            energy storage technologies, and predictive maintenance for power
            plants. By leveraging our expertise, energy companies can improve
            operational efficiency, reduce carbon footprint, and contribute to a
            cleaner and more sustainable future.
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.group}>
          <div className={styles.div1}>03</div>
          <img className={styles.frameItem} alt="" src="/group-204@2x.png" />
          <div className={styles.heading21}>Agriculture</div>
          <div className={styles.inTheHealthcare}>
            The agriculture industry is evolving rapidly with the adoption of
            advanced technologies that optimize farming practices, increase crop
            yields, and promote sustainable agriculture. 202 Portal offers
            agrotech solutions such as precision farming technologies, IoT-based
            crop monitoring systems, and data analytics platforms for optimized
            agricultural practices. Our solutions empower farmers to make
            data-driven decisions, maximize resource efficiency, and improve
            overall agricultural productivity.
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>04</div>
          <img className={styles.frameItem} alt="" src="/group-205@2x.png" />
          <div className={styles.heading25}>{`Transportation & Logistics`}</div>
          <div className={styles.inTheHealthcare}>
            Efficient transportation and logistics are vital for businesses to
            meet customer demands and maintain a competitive edge. We provide
            transportation and logistics solutions, including real-time fleet
            management systems, route optimization software, and supply chain
            visibility platforms. By leveraging our expertise, organizations can
            optimize their logistics operations, reduce costs, and enhance
            customer satisfaction.
          </div>
        </div>
      </div>
      <div className={styles.parent2}>
        <div className={styles.div1}>03</div>
        <img className={styles.frameItem} alt="" src="/group-206@2x.png" />
        <div className={styles.heading25}>{`Retail & E-commerce`}</div>
        <div className={styles.inTheHealthcare}>
          The retail and e-commerce sectors are continuously evolving, driven by
          changing consumer behaviors and digital transformation. Our solutions
          for retail and e-commerce include e-commerce platforms, personalized
          marketing solutions, inventory management systems, and customer
          analytics. Partner with us to enhance your online presence, optimize
          operations, and deliver exceptional customer experiences in the
          digital marketplace.
        </div>
      </div>
      <ContainerFooterHome
        dimensions="/divfooterarrowwrap2.svg"
        dimensionsText="/63cf07a33f4f125387724909-backtotopsvg2.svg"
        dimensionsId="/group-102.svg"
        divfooterArrowWrapBackgroundColor="unset"
        propCursor="unset"
        propCursor1="pointer"
        onLinkHomeClick={onLinkHomeClick}
        onLinkWorkClick={onLinkWorkClick}
        onLinkWork1Click={onLinkWork1Click}
        onLinkWork2Click={onLinkWork2Click}
        onLinkContainer1Click={onLinkContainer1Click}
      />
    </div>
  );
};

export default Insights;
