import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import Marque from "../components/marque/marque";
import NewsLetter from "../components/news-letter/NewsLetter";
import "../styles/globals.css";
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={styles.wrapper}>
        <Header />
        {/* <Marque /> */}
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
