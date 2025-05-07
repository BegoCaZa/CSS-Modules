import Button from '../button/Button';
import styles from './card.module.css';

const Card = ({ src, title, text, color }) => {
  const cardClass = `${styles.card} ${styles[color]}`;
  return (
    <div className={cardClass}>
      <img src={src} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Button color={color} />
    </div>
  );
};

export default Card;
