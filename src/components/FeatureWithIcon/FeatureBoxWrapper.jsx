import styles from './FeatureWithIcon.module.css';

export const FeatureBoxWrapper = ({ children }) => {
  return (
    <section className={styles.featureBoxes}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
