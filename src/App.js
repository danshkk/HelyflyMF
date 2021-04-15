import s from './App.module.scss';
import About from './blocks/about/About';
import CopterPack from './blocks/copterPack/CopterPack';
import CopterPhoto from './blocks/copterPhoto/CopterPhoto';
import Feedback from './blocks/feedback/Feedback';
import Header from './blocks/header/Header';
import Main from './blocks/main/Main';
import Plan from './blocks/plan/Plan';
import Tickets from './blocks/tickets/Tickets';
import Footer from './blocks/footer/Footer'





function App() {
  return (
    <>
      <Header />
      <Main/>
      <CopterPack/>
      <CopterPhoto/>
      <About/>
      <Tickets/>
      <Plan/>
      <Feedback/>
      <Footer/>
    </>
  );
}

export default App;
