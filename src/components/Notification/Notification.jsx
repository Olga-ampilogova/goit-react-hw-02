import css from "./Notification.module.css";
export const Notification = ({ message }) => {
  return <p className={css.content}>{message}</p>;
};
