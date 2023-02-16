import "../styles/globals.css";
import styles from "./layout.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={styles.wrapper}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
