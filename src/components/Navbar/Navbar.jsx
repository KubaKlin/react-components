import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <a href="/" className="logo">
          Logo
        </a>
      </div>
    </div>
  );
};
