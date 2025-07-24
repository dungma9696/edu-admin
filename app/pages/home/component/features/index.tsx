import { Container, Grid } from "@mui/material";
import styles from "./feature.module.scss";
import Badge from "@/components/ui/badge";
import Card from "./component/card";

const cards = [
  {
    icon: "/images/feature/data.png",
    title: "Analyze your data",
    subtitle: "Create reports with an easy to use drag-and-drop designer.",
    link: "/",
  },
  {
    icon: "/images/feature/security.png",
    title: "Collaborate securely",
    subtitle: "Share/publish your reports with your colleagues.",
    link: "/",
  },
  {
    icon: "/images/feature/analy.png",
    title: "Embedded analytics",
    subtitle: "Get a powerful analytics tool in your own brand name.",
    link: "/",
  },
  {
    icon: "/images/feature/easy.png",
    title: "Easy and Intuitive",
    subtitle: "Easily converse with your data using everyday language. ",
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
          <h2 className="h2-black">Our solution for your business</h2>
          <p className="paragraph-18-gray">
            We are self-service data analytics software that lets you create
            visually appealing data visualizations and insightful dashboards in
            minutes.
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
