import s from './App.module.scss';
import About from './blocks/about/About';
import CopterPack from './blocks/copterPack/CopterPack';
import CopterPhoto from './blocks/copterPhoto/CopterPhoto';
import Header from './blocks/header/Header';
import Main from './blocks/main/Main';
import Plan from './blocks/plan/Plan';
import Tickets from './blocks/tickets/Tickets';
import Reviews from './components/reviews/Reviews';



function App() {
  return (
    <>
      <Header />
      <Main
        id='idMain' />
      <CopterPack/>
      <CopterPhoto/>
      <About/>
      <Tickets/>
      <Plan/>
    </>
  );
}

export default App;
