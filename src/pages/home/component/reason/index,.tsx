import { Container, Grid } from "@mui/material";
import styles from "./reason.module.scss";
import Card from "./card";
function Reason() {
  const cards = [
    {
      title: "Develop logical thinking and problem solving skills ",
      subTitle:
        "Programming helps students practice logical thinking and problem solving skills systematically and creatively.",
      img: "/images/reason/reason-1.png",
    },
    {
      title: "Critical Skills for the Digital Age",
      subTitle:
        "Programming is one of the core skills of the 21st century, helping students get acquainted with technology, automation and artificial intelligence from an early age.",
      img: "/images/reason/reason-1.png",
    },
    {
      title: "A solid foundation for many professions",
      subTitle:
        "Whether becoming an engineer, scientist, doctor or businessman, programming knowledge will always be an advantage for students to develop their future careers.",
      img: "/images/reason/reason-1.png",
    },
  ];
  return (
    <div className={styles.container}>
      <Container>
        <h2 className="h2-black">Why should your learn programming?</h2>
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
