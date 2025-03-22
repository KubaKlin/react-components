import styles from './FeatureWithIcon.module.css';

export const FeatureWithIcon = ({ color, icon, title, subtitle }) => {
  return (
    <div className={styles.box}>
      <div className={styles.iconBox} style={{ backgroundColor: color }}>
        <img className={styles.icon} src={icon} alt="feature icon" />
      </div>
      <div className={styles.boxContent}>
        <h4 className={styles.header}>{title}</h4>
        <p className={styles.paragraph}>{subtitle}</p>
      </div>
    </div>
  );
};
