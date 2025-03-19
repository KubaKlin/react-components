import styles from './socialIcon.module.css';

export const SocialIcon = ({ icon, href }) => {
  return (
    <a href={href} className={styles.socialIcon}>
      <img src={icon} alt="company icon" />
    </a>
  );
};
