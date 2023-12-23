// import logo from './logo.svg';
// import Input from './Pages/Input';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Input from './Pages/Input';
// import ReactBootstrap from './Pages/reactBootstrap';
// import Carousele from './Advanced/Carousel';
// import Style from './Pages/Style';
import Card from "./Advanced/Card";
import MyCarousel from "./Pages/MyCarousel";
function App() {
  return (
    <>
      {/*        
       <Style/>
       <ReactBootstrap/> */}
      {/* <Input/>  */}
      {/* <Carousele/> */}
      <MyCarousel></MyCarousel>{" "}
      <div class="row justify-content-center align-items-center g-2 m-5">
        <div class="col-md-4"> 
        <Card
          img="Imran1.png"
          title="card-title-1"
          cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
          cardBtn="scard-btn-1"
        ></Card> </div> 
        <div class="col-md-4"> 
        <Card
          img="Imran1.png"
          title="card-title-1"
          cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
          cardBtn="scard-btn-1"
        ></Card>
         </div>
        <div class="col-md-4"> 
        <Card
          img="Imran1.png"
          title="card-title-1"
          cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
          cardBtn="scard-btn-1"
        ></Card>
         </div>
      </div>
    </>
  );
}

export default App;
// import Clipboard from './Pages/Clipboard';
// import State from './Pages/State'
// import Home from './Pages/Home'
// import Focus from "./Pages/Focus";
// import Keyboard_event from './Pages/Keyboard_event';
// import Condition from './Pages/Condition';

{
  /* <Home name="imran " number="013..."/>
       <Home name="ahmed " number="014..."/>
       <State name="ahmed " number="014..."/>
       <Clipboard/>
       <Focus/>
       <Keyboard_event/>
       <Condition/> */
}
