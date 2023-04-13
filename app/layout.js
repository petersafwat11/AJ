import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";
import "../styles/globals.css";
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
  // const [showPopup, setShowPopup] = useState(true);
  // const hidePopup = () => {
  //   setShowPopup(false);
  // };
  // const [showSendMessage, setShowSendMessage] = useState(false);
  // const toggleSendMessageComponent = () => {
  //   setShowSendMessage(!showSendMessage);
  //   console.log("clicked", showSendMessage);
  // };
  // const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);
  // const updateDimensions = () => {
  //   if (window.scrollY > 350) {
  //     setShowScrollTopIcon(true);
  //   } else {
  //     setShowScrollTopIcon(false);
  //   }
  //   console.log(window.scrollY, "scroll");
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);
  // const scrollToTopPage = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <html>
      <head />
      <body className={styles.wrapper}>
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
