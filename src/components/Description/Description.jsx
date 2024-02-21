import css from "./Description.module.css";
export const Description = ({ title, content }) => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.descriptionContent}>{content}</p>
    </div>
  );
};
