import style from './CompanyLogoWrapper.module.css';

export const CompanyLogoWrapper = ({ children }) => {
  return (
    <section className={style.logoSection}>
      <h5>You will be in good company</h5>
      <div className={style.container}>{children}</div>
    </section>
  );
};
