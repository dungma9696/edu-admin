import styles from "./reason.module.scss";

function Card({card}) {
  return (
    <div className={styles.cardContainer}>
      <img src={card.img} alt="reason 1" />
      <h3 className="h3-black">{card.title}</h3>
      <p className="paragraph-14-black">
       {card.subTitle}
      </p>
    </div>
  );
}

export default Card;
