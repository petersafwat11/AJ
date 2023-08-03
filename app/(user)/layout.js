import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/news-letter/NewsLetter";
import "../../styles/globals.css";
export default function UserLayout({ children }) {
  return (
    <section>
      {children}
      <NewsLetter />
      <Footer />
    </section>
  );
}
