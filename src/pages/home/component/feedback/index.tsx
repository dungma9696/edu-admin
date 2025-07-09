import { CheckCircle } from "@mui/icons-material";
import { Avatar, Box, Chip, Container, Grid } from "@mui/material";
import styles from "./feedback.module.scss";

function Feedback() {
  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <h2 className="h2-black">Trusted by the world largest business</h2>
        <div className={styles.logoContainer}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/slack.png" alt="slack" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/netflix.png" alt="netflix" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/fitbit.png" alt="fitbit" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/google.png" alt="google" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/airbnb.png" alt="airbnb" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/uber.png" alt="uber" />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.feedbackContainer}>
          <Grid
            container
            spacing={4}
            justifyContent={{ lg: "center" }}
            className={styles.testimonialsGrid}
          >
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div
                className={`${styles.feedbackItem} ${styles.feedbackItemFirst}`}
              >
                <img
                  src="./images/feedback/airbnb-color.png"
                  alt="Airbnb"
                  width={102}
                  height={32}
                />
                <p className="paragraph-18-black">
                  I received great customer service from the specialists who
                  helped me. I would recommend to anyone who wants great
                  dashboard that has great quality.
                </p>

                <Box className={styles.customerInfo}>
                  <Avatar
                    src="./images/feedback/user1.png"
                    alt="avatar"
                    className={styles.customerAvatar}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box className={styles.customerDetails}>
                    <p className={`paragraph-16-black ${styles.customerName}`}>
                      Bryan Arnoldy
                    </p>

                    <Chip
                      icon={
                        <CheckCircle sx={{ fontSize: "16px !important" }} />
                      }
                      label="Verified customer"
                      size="small"
                      className={styles.verifiedChip}
                      sx={{
                        backgroundColor: "transparent",
                        color: "#10B981",
                        border: "none",
                        fontSize: "0.875rem",
                        "& .MuiChip-icon": {
                          color: "#10B981",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div className={styles.feedbackItem}>
                <img
                  src="./images/feedback/amazon.png"
                  alt="Airbnb"
                  width={102}
                  height={32}
                />
                <p className="paragraph-18-black">
                  My experience with this platform so far has been great.
                  Everything is easy, from creating visualization, scheduling,
                  collaboration and many more.
                </p>

                <Box className={styles.customerInfo}>
                  <Avatar
                    src="./images/feedback/user2.png"
                    alt="avatar"
                    className={styles.customerAvatar}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box className={styles.customerDetails}>
                    <p className={`paragraph-16-black ${styles.customerName}`}>
                      Joshua William{" "}
                    </p>

                    <Chip
                      icon={
                        <CheckCircle sx={{ fontSize: "16px !important" }} />
                      }
                      label="Verified customer"
                      size="small"
                      className={styles.verifiedChip}
                      sx={{
                        backgroundColor: "transparent",
                        color: "#10B981",
                        border: "none",
                        fontSize: "0.875rem",
                        "& .MuiChip-icon": {
                          color: "#10B981",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Feedback;
