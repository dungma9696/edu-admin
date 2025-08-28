import { Container, Grid } from "@mui/material";
import styles from "./reason.module.scss";
import Card from "./card";
function Reason() {
  const cards = [
    {
      title: "Phát triển tư duy logic và kỹ năng giải quyết vấn đề",
      subTitle:
        "Lập trình giúp học sinh rèn luyện khả năng tư duy logic và kỹ năng giải quyết vấn đề một cách hệ thống và sáng tạo.",
      img: "/images/reason/reason-1.png",
    },
    {
      title: "Kỹ năng quan trọng cho thời đại số",
      subTitle:
        "Lập trình là một trong những kỹ năng cốt lõi của thế kỷ 21, giúp học sinh làm quen với công nghệ, tự động hóa và trí tuệ nhân tạo ngay từ khi còn nhỏ.",
      img: "/images/reason/reason-1.png",
    },
    {
      title: "Nền tảng vững chắc cho nhiều nghề nghiệp",
      subTitle:
        "Cho dù trở thành kỹ sư, nhà khoa học, bác sĩ hay doanh nhân, kiến ​​thức lập trình sẽ luôn là lợi thế để sinh viên phát triển sự nghiệp tương lai.",
      img: "/images/reason/reason-1.png",
    },
  ];
  return (
    <div className={styles.container}>
      <Container>
        <h2 className="h2-black">Tại sao bạn nên học lập trình?</h2>
        <Grid container spacing={6}>
          {cards.map((card, index) => {
            return (
              <Grid size={4} key={index}>
                <Card card={card} />
              </Grid>
            );
          })}

        </Grid>
      </Container>
    </div>
  );
}

export default Reason;
