import CheckIcon from "@mui/icons-material/Check";
import { Container, Grid } from "@mui/material";
import styles from "./collaborate.module.scss";
function Collaborate() {
  return (
    <Container maxWidth="xl" className={styles.container}>
      <Grid container spacing={{ md: 5, sm: 1 }}>
        <Grid size={6}>
          <div className={styles.collaborateTitle}>
            <p className={styles.tag}>COLLABORATE</p>
            <h2 className="h2-black">
              Collaborate with your team anytime, anywhere.
            </h2>
            <p className="paragraph-18-gray">
              See which work apps your team is working in, and join them with a
              click. Shared cursors equals better than screen-sharing.
            </p>
          </div>
          <div className={styles.collaborateList}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Organize your data</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Always in sync</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Work with any team</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Embedded analytics</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Business analytics</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid size={6}>
          <img
            src="/images/collborate.png"
            alt="collborate"
            className={styles.collaborateImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Collaborate;
