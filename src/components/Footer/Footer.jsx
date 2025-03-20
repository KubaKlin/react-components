import styles from './Footer.module.css';
import { socialIcons } from '../../utilities/socialIcons';
import { SocialIcon } from '../SocialIcon/SocialIcon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <a href="/" className={styles.logo}>
            Logo
          </a>
          <p className={styles.footerParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className={styles.footerParagraph}>@Lorem</p>
        </div>

        <div className={styles.footerContent}>
          <h4 className={styles.footerHeader}>Contact us</h4>
          <p className={styles.footerParagraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={styles.footerSocials}>
            <p className={styles.footerParagraph}>+908 89097 890</p>
            <div className={styles.socialIcons}>
              {socialIcons.map((socialIcon) => (
                <SocialIcon
                  key={socialIcon.id}
                  icon={socialIcon.icon}
                  href={socialIcon.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
