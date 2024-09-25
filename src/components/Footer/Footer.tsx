import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} React Todo List - Developed by{" "}
        <a href="https://www.linkedin.com/in/petertechdev/">Peter Souza</a>
      </p>
    </footer>
  );
}
