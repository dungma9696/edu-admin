"use client";

import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Grid } from "@mui/material";
import type React from "react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Container maxWidth="xl">
          <Grid container justifyContent="center">
            <Grid>
              <Box className={styles.content}>
                <h1 className={`${styles.title} h1-white`} data-aos="fade-up">
                  BẮT ĐẦU SỰ NGHIỆP LẬP TRÌNH CÙNG CHÚNG TÔI
                </h1>

                <p
                  className={`paragraph-20-white ${styles.subtitle}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Tham gia khóa học của chúng tôi từ cơ bản đến nâng cao. Bạn sẽ
                  học các ngôn ngữ lập trình phổ biến, thực hành dự án thực tế
                  và nhận được sự hỗ trợ tận tình từ đội ngũ giảng viên giàu
                  kinh nghiệm.
                </p>

                <Box
                  className={styles.buttonGroup}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Button
                    variant="contained"
                    size="large"
                    className={styles.primaryButton}
                    endIcon={<ArrowForward />}
                  >
                    Bắt đầu
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className={styles.secondaryButton}
                    endIcon={<ArrowForward />}
                  >
                    Xem Thử Demo
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.illustration}>
        <img
          src="/images/home-page/ill-macboo.png"
          alt="MacBook Illustration"
          width={600}
          height={400}
          className={styles.illustrationImage}
        />
      </div>
    </div>
  );
};

export default Hero;
