import { Container, Grid } from "@mui/material";
import styles from "./more-feature.module.scss";
import Card from "./component/card";

const cards = [
  {
    icon: "/images/feature/feat1.png",
    title: "Easy customization",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
  {
    icon: "/images/feature/feat2.png",
    title: "Secure and fast",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
  {
    icon: "/images/feature/feat3.png",
    title: "Powerful dashboard",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
  {
    icon: "/images/feature/feat4.png",
    title: "Cloud upload",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
  {
    icon: "/images/feature/feat5.png",
    title: "Proven Technology",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
  {
    icon: "/images/feature/feat6.png",
    title: "98.99% satisfaction",
    sub: "No matter what kind of home you have to share, you can increase your earnings.",
  },
];
function MoreFeature() {
  return (
    <div className={styles.container}>
      <Container maxWidth="xl">
        <div className={`flex-center-col ${styles.titleWrap}`}>
          <p className={styles.tag}>FEATURES</p>
          <h2 className="h2-black">Explore about our awesome features</h2>
          <p className={`paragraph-18-gray ${styles.description}`}>
            An awesome & powefull JavaScript library for building user
            interfaces. Independent of any third-party libraries or frameworks.
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
