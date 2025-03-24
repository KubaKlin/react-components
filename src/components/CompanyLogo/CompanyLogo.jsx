import style from './CompanyLogoWrapper.module.css';

export const CompanyLogo = ({ icon }) => {
  return <img className={style.image} src={icon} alt="company icon" />;
};
