import { Link } from "react-router";
import styles from "../feature.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
interface IFeauture {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}
function Card({ item }: { item: IFeauture }) {
  return (
    <div className={`flex-center-col ${styles.cardContainer}`}>
      <div className={styles.cardIconWrap}>
        <div className={styles.cardIcon}></div>
        <img src={item.icon} alt="Icon" width={40} height={40} />
      </div>

      <h6 className="h6-black">{item.title}</h6>
      <p className="paragraph-16-gray">{item.subtitle}</p>
      <Link
        to={item.link}
        className={`flex-center text-18-bold ${styles.featureLink}`}
      >
        Learn more <ArrowForwardIcon />
      </Link>
    </div>
  );
}

export default Card;
