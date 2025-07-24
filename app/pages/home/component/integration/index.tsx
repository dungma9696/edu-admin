import { Container } from "@mui/material";
import styles from "./integration.module.scss";
function Integration() {
  return (
    <Container maxWidth="xl">
      <div className={`flex-center ${styles.container}`}>
        <div className={`${styles.iconWrap} ${styles.icon1}`}>
          <img src="/images/integration/ic1.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon2}`}>
          <img src="/images/integration/ic2.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon3}`}>
          <img src="/images/integration/ic3.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon4}`}>
          <img src="/images/integration/ic4.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon5}`}>
          <img src="/images/integration/ic5.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon6}`}>
          <img src="/images/integration/ic6.png" alt="Icon" />
        </div>
        <div className={`flex-center-col ${styles.interTitle}`}>
          <p className={styles.tag}>INTEGRATION</p>
          <h2 className=" h2-black">
            Seamless integrations with other analytics tools
          </h2>
          <p className="paragraph-18-gray">
            Polygon absolutely works great with tools in your other existing
            platform.
          </p>
        </div>

        <div className={styles.bgImage}>
          <img src="/images/integration/bg-mobie.png" alt="Background" />
        </div>
      </div>
    </Container>
  );
}

export default Integration;
