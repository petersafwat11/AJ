import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NewsLetter from "../components/news-letter/NewsLetter";
import "../styles/globals.css";
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={styles.wrapper}>
        <Header />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
