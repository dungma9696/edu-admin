import { Container, Grid } from "@mui/material";
import styles from "./more-feature.module.scss";
import Card from "./component/card";

const cards = [
  {
    icon: "/images/feature/feat1.png",
    title: "Dễ dàng tùy chỉnh ",
    sub: "Mỗi học viên có thể chọn lộ trình học phù hợp với mục tiêu và trình độ.",
  },
  {
    icon: "/images/feature/feat2.png",
    title: "Nhanh và bảo mật",
    sub: "Code và chạy thử ngay trên trình duyệt mà không cần cài đặt phức tạp.",
  },
  {
    icon: "/images/feature/feat3.png",
    title: "Bảng điều khiển mạnh mẽ",
    sub: "Theo dõi số bài đã học, thời gian học và mức độ hoàn thành khóa học.",
  },
  {
    icon: "/images/feature/feat4.png",
    title: "Tải lên đám mây",
    sub: "Lưu trữ bài tập, dự án và tài liệu trên cloud để học mọi lúc, mọi nơi",
  },
  {
    icon: "/images/feature/feat5.png",
    title: "Công nghệ tiên tiến",
    sub: "Cập nhật liên tục kiến thức về React, Node.js, AI, và nhiều công nghệ hiện đại.",
  },
  {
    icon: "/images/feature/feat6.png",
    title: "Sự hài lòng cao",
    sub: "Phản hồi tích cực từ hàng ngàn học viên đã hoàn thành khóa học.",
  },
];
function MoreFeature() {
  return (
    <div className={styles.container}>
      <Container >
        <div className={`flex-center-col ${styles.titleWrap}`}>
          <p className={styles.tag}>TÍNH NĂNG</p>
          <h2 className="h2-black">Khám phá những tính năng nổi bật của khóa học</h2>
          <p className={`paragraph-18-gray ${styles.description}`}>
           Website học lập trình của chúng tôi mang đến trải nghiệm học tập trực quan, dễ hiểu và thực hành hiệu quả.
          </p>
        </div>
        <div className={styles.cardWrap}>
          <Grid container spacing={5}>
            {cards.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                  <Card item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MoreFeature;
