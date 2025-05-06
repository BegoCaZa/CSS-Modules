import Button from '../button/Button';
import styles from './card.module.css';

const Card = ({ src, title, text, bgColor }) => {
  const cardClass = `${styles.card} ${styles[bgColor]}`;
  return (
    <div className={cardClass}>
      <img src={src} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Button textColor={bgColor} />
    </div>
  );
};

export default Card;
