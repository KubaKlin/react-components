import styles from './FeatureWithIcon.module.css';
import { FeatureWithIcon } from './FeatureWithIcon';
import { featureBoxes } from '../../utilities/featureBoxes';

export const FeatureBoxWrapper = () => {
  return (
    <section className={styles.featureBoxes}>
      <div className={styles.container}>
        {featureBoxes.map((featureBox) => (
          <FeatureWithIcon
            key={featureBox.id}
            title={featureBox.title}
            subtitle={featureBox.subtitle}
            icon={featureBox.icon}
            color={featureBox.color}
          />
        ))}
      </div>
    </section>
  );
};
