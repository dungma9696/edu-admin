import { Container, Grid } from "@mui/material";
import Card from "./component/card";
import styles from "./feature.module.scss";

const cards = [
  {
    icon: "/images/feature/feat1.svg",
    title: "Từ cơ bản đến nâng cao",
    subtitle: "Bắt đầu với những kiến ​​thức cơ bản và tiến tới công nghệ hiện đại.",
    link: "/",
  },
  {
    icon: "/images/feature/feat2.svg",
    title: "Học tập và cộng tác",
    subtitle:
      "Kết nối, thảo luận và học hỏi với giảng viên và các bạn sinh viên khác.",
    link: "/",
  },
  {
    icon: "/images/feature/feat3.svg",
    title: "Xây dựng các dự án thực tế",
    subtitle:
      "Làm việc trên các dự án thực tế để nâng cao kỹ năng và tạo ra một danh mục đầu tư mạnh mẽ.",
    link: "/",
  },
  {
    icon: "/images/feature/feat4.svg",
    title: "Dễ dàng để làm theo và thực tế",
    subtitle:
      "Các bài học được thiết kế rõ ràng, thân thiện với người mới bắt đầu và hiệu quả",
    link: "/",
  },
];

function Feature() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={`${"flex-center-col"} ${styles.titleWrap}`}>
          {/* <Badge badgeStyle="soft" className={styles.badgeFeature}>
            FEATURES
          </Badge> */}
          <h2 className="h2-black">
            Các khóa học lập trình của chúng tôi dành cho bạn
          </h2>
          <p className="paragraph-18-gray">
            Chúng tôi cung cấp các khóa học lập trình chất lượng cao giúp bạn
            nhanh chóng nắm vững kỹ năng lập trình và xây dựng các dự án thực tế
            chỉ trong vài tuần.
          </p>
        </div>

        <div style={{ marginTop: 50 }}>
          <Grid container spacing={2}>
            {cards.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Feature;
