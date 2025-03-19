import styles from './featureWithIcon.module.css';

export const FeatureWithIcon = ({ color, icon, title, subtitle }) => {
  return (
    <div className={styles.box}>
      <div className={styles.iconBox} style={{ backgroundColor: color }}>
        <img src={icon} alt="feature icon" />
      </div>
      <div className={styles.boxContent}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
