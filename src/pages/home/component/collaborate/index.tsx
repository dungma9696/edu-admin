import CheckIcon from "@mui/icons-material/Check";
import { Container, Grid } from "@mui/material";
import styles from "./collaborate.module.scss";
function Collaborate() {
  return (
    <Container className={styles.container}>
      <Grid container spacing={{ md: 5, sm: 1 }}>
        <Grid size={6}>
          <div className={styles.collaborateTitle}>
            <p className={styles.tag}>CỘNG TÁC</p>
            <h2 className="h2-black">
              Học tập và trao đổi cùng bạn bè, mọi lúc mọi nơi
            </h2>
            <p className="paragraph-18-gray">
             Tham gia cộng đồng học viên năng động. Bạn có thể cùng nhau thảo luận, làm project nhóm và trao đổi kiến thức lập trình một cách dễ dàng.
            </p>
          </div>
          <div className={styles.collaborateList}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Thảo luận trực tiếp trên code</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Làm việc nhóm với project thực tế</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Chia sẻ và review code nhanh chóng</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Luôn đồng bộ trên mọi thiết bị</p>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <div className={styles.collaborateItem}>
                  <div className={styles.iconCheck}>
                    <CheckIcon style={{ fontSize: "16px" }} />
                  </div>
                  <p className="paragraph-16-black">Học cùng mentor và bạn bè</p>
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
