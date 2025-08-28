import { Container } from "@mui/material";
import styles from "./integration.module.scss";
function Integration() {
  return (
    <Container>
      <div className={`flex-center ${styles.container}`}>
        <div className={`${styles.iconWrap} ${styles.icon1}`}>
          <img src="/images/integration/GitHub-Logo.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon2}`}>
          <img src="/images/integration/visual.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon3}`}>
          <img src="/images/integration/React-icon.svg.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon4}`}>
          <img src="/images/integration/next.webp" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon5}`}>
          <img src="/images/integration/HTML5_logo_and_wordmark.svg.png" alt="Icon" />
        </div>
        <div className={`${styles.iconWrap} ${styles.icon6}`}>
          <img src="/images/integration/ts.webp" alt="Icon" />
        </div>
        <div className={`flex-center-col ${styles.interTitle}`}>
          <p className={styles.tag}>Học tập hiệu quả</p>
          <h2 className=" h2-black">
            Kết hợp nhiều công cụ học lập trình
          </h2>
          <p className="paragraph-18-gray">
           Slearn hỗ trợ tích hợp nhiều công cụ học tập và thực hành, giúp bạn nâng cao kỹ năng lập trình mọi lúc, mọi nơi.
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
