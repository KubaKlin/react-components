import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.twoColumnGrid}>
          <div>
            <h3 className={styles.bannerHeader}>
              Experienced <span className={styles.colorWrapper}>mobile and web</span> applications and website
              builders.
            </h3>
            <p className={styles.bannerParagraph}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders with dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
          <div>
            <img
              className={styles.bannerImg}
              src="src/assets/wana-splash-pic.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
