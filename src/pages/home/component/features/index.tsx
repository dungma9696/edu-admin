import { Container, Grid } from "@mui/material";
import styles from "./feature.module.scss";
import Badge from "@/components/ui/badge";
import Card from "./component/card";

const cards = [
  {
    icon: "/images/feature/feat1.svg",
    title: "From basic to advanced",
    subtitle: "Start with fundamentals and progress to modern technologies.",
    link: "/",
  },
  {
    icon: "/images/feature/feat2.svg",
    title: "Study and collaborate",
    subtitle:
      "Connect, discuss, and learn with instructors and fellow students.",
    link: "/",
  },
  {
    icon: "/images/feature/feat3.svg",
    title: "Build real-world projects",
    subtitle:
      "Work on real projects to sharpen your skills and create a strong portfolio.",
    link: "/",
  },
  {
    icon: "/images/feature/feat4.svg",
    title: "Easy to follow and practical",
    subtitle:
      "Lessons are designed to be clear, beginner-friendly, and effective",
    link: "/",
  },
];

function Feature() {
  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={`${"flex-center-col"} ${styles.titleWrap}`}>
          <Badge badgeStyle="soft" className={styles.badgeFeature}>
            FEATURES
          </Badge>
          <h2 className="h2-black">Our programming courses for you</h2>
          <p className="paragraph-18-gray">
            We provide high-quality programming courses that help you quickly
            master coding skills and build real-world projects in just a few
            weeks.
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
