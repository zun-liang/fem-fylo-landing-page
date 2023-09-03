import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Reviews from "./components/Reviews";
import SignIn from "./components/Signin";
import Team from "./components/Team";
import GlobalStyles from "./globalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <main>
      <Introduction />
      <Features />
      <Team />
      <Reviews />
      <SignIn />
    </main>
    <Footer />
  </>
);

export default App;
