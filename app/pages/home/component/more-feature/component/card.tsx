import styles from "../more-feature.module.scss";

interface ICard {
  icon: string;
  title: string;
  sub: string;
}
function Card({ item }: { item: ICard }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <img src={item.icon} alt="Icon" />
      </div>
      <div className={styles.cardRight}>
        <h5 className="h5-black">{item.title}</h5>
        <p className="paragraph-18-gray">{item.sub}</p>
      </div>
    </div>
  );
}

export default Card;
