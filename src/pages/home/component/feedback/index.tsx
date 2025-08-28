import { CheckCircle } from "@mui/icons-material";
import { Avatar, Box, Chip, Container, Grid } from "@mui/material";
import styles from "./feedback.module.scss";

function Feedback() {
  return (
    <Container >
      <div className={styles.container}>
        <h2 className="h2-black">Được tin tưởng bởi hàng ngàn học viên và đối tác</h2>
        <div className={styles.logoContainer}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/pngimg.com - github_PNG65.png" alt="slack" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/FreeCodeCamp_logo.png" alt="netflix" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/images.png" alt="fitbit" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/Stack_Overflow_logo.svg.png" alt="google" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/Coursera_logo_(2020).svg.png" alt="airbnb" />
              </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <div className={styles.logoItem}>
                <img src="./images/feedback/For_PRs_logo.jpg" alt="uber" />
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
                {/* <img
                  src="./images/feedback/airbnb-color.png"
                  alt="Airbnb"
                  width={102}
                  height={32}
                /> */}
                <p className="paragraph-18-black">
                  Các khóa học ở đây rất thực tế, có nhiều project giúp mình nâng cao kỹ năng nhanh chóng. Mentor hỗ trợ tận tình.
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
                      Nguyễn Văn Hùng – Học viên đã hoàn thành khóa ReactJS
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
                {/* <img
                  src="./images/feedback/amazon.png"
                  alt="Airbnb"
                  width={102}
                  height={32}
                /> */}
                <p className="paragraph-18-black">
                  Mình thích nhất là phần cộng đồng: có thể thảo luận với bạn bè, chia sẻ code và cùng nhau giải bài tập. Rất hữu ích!
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
                     Trần Thị Mai – Học viên Fullstack Web
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
