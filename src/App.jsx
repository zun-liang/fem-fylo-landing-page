import GlobalStyles from './globalStyles'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Features from './components/Features'
import Team from './components/Team'
import Reviews from './components/Reviews'
import SignIn from './components/Signin'
import Footer from './components/Footer'

const App = () => 
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

export default App
