import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Logo
        </a>
      </div>
    </div>
  );
};
