import { Container, Grid } from "@mui/material";
import styles from "./analytics.module.scss";
import Button from "@/components/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Analytic() {
  return (
    <div className={styles.container}>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid size={{ sm: 12, xs: 12, md: 12, lg: 6 }}>
            <img
              src="/images/analytic.png"
              alt="Analytic"
              className={styles.analyticImage}
              width={700}
              height={541}
            />
          </Grid>
          <Grid size={{ sm: 12, xs: 12, md: 12, lg: 6 }}>
            <div className={styles.analyticRight}>
              <p className={styles.tag}>ANALYTICS</p>
              <h2 className="h2-black">
                Analyze your data with our analyze tools.
              </h2>
              <p className="paragraph-18-gray">
                Self-service data analytics software that lets you create
                visually appealing data visualizations and insightful dashboards
                in minutes.
              </p>

              <Grid container spacing={2}>
                <Grid size={{ sm: 6, xs: 12, md: 6 }}>
                  <div className={styles.cardContainer}>
                    <div className={styles.analyticIconWrap}>
                      <div className={styles.analyticIcon}></div>
                      <img
                        src={"/images/anylytic/ic1.png"}
                        alt="Icon"
                        width={40}
                        height={40}
                      />
                    </div>

                    <h6 className="h6-black">Powerful dashboard</h6>
                    <p className="paragraph-16-gray">
                      Combine multiple reports into a single beautiful
                      dashboard.
                    </p>
                  </div>
                </Grid>
                <Grid size={{ sm: 6, xs: 12, md: 6 }}>
                  <div className={styles.cardContainer}>
                    <div className={styles.analyticIconWrap}>
                      <div className={styles.analyticIcon}></div>
                      <img
                        src={"/images/anylytic/syn.png"}
                        alt="Icon"
                        width={40}
                        height={40}
                      />
                    </div>

                    <h6 className="h6-black">Always in Sync</h6>
                    <p className="paragraph-16-gray">
                      Don’t worry about the data, always be synchronized
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Button endIcon={<ArrowForwardIcon />} className={styles.btnLink}>
                Try it out free
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Analytic;
