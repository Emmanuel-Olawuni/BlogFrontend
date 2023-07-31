import Header from "./components/header/header";
import Card from "./components/card/Card";
import Popular from "./components/popular/Popular";
import Recent from "./components/recent/recent";
import CaseStudy from "./components/case-studies/CaseStudy";
import Footer from "./components/footer/footer";
import Newsletter from "./components/newsletter/Newsletter";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Card />
        <Popular />
        <Recent />
        <CaseStudy />
        <Newsletter />
      </main>
      <footer>
        <Footer gi/>
      </footer>
    </>
  );
}

export default App;
