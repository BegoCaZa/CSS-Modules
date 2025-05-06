import styles from './button.module.css';

const Button = ({ textColor }) => {
  const buttonClass = `${styles.button} ${styles[textColor]}`;
  return <button className={buttonClass}>Learn More</button>;
};

export default Button;
