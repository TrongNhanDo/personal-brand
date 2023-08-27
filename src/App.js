import { Routes, Route } from 'react-router-dom';
import './App.css';
import FooterMain from './components/footer';
import HeaderMain from './components/header';
import HomePage from './components/homepage';
import Bottom from './components/bottom/index';
import Cardio from './components/classes/cardio';
import AirYoga from './components/classes/air-yoga';
import Lifting from './components/classes/lifting';
import PressAndBack from './components/classes/press_and_back';
import Classes from './components/classes';
import PriceAndPlan from './components/price-and-plan';

function App() {
   return (
      <div className="App">
         <HeaderMain />
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/price-and-plan" element={<PriceAndPlan />}></Route>
            <Route path="/classes" element={<Classes />}></Route>
            <Route path="/classes/cardio" element={<Cardio />}></Route>
            <Route path="/classes/air-yoga" element={<AirYoga />}></Route>
            <Route path="/classes/lifting" element={<Lifting />}></Route>
            <Route
               path="/classes/press-and-back"
               element={<PressAndBack />}
            ></Route>
         </Routes>
         <Bottom />
         <FooterMain />
      </div>
   );
}

export default App;