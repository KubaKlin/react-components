import style from './TextBox.module.css';

export const TextBoxWrapper = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
