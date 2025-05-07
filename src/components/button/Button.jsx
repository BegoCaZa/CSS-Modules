import styles from './button.module.css';

const Button = ({ color }) => {
  const buttonClass = `${styles.button} ${styles[color]}`;
  return <button className={buttonClass}>Learn More</button>;
};

export default Button;
