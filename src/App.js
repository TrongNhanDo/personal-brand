import { Routes, Route } from 'react-router-dom';
import './App.css';
import FooterMain from './components/footer';
import HeaderMain from './components/header';
import HomePage from './components/homepage';
import Bottom from './components/bottom/index';
import Cardio from './components/popular-classes/cardio';
import AirYoga from './components/popular-classes/air-yoga';
import Lifting from './components/popular-classes/lifting';
import PressAndBack from './components/popular-classes/press_and_back';

function App() {
   return (
      <div className="App">
         <HeaderMain />
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/popular-classes/cardio" element={<Cardio />}></Route>
            <Route
               path="/popular-classes/air-yoga"
               element={<AirYoga />}
            ></Route>
            <Route
               path="/popular-classes/lifting"
               element={<Lifting />}
            ></Route>
            <Route
               path="/popular-classes/press-and-back"
               element={<PressAndBack />}
            ></Route>
         </Routes>
         <Bottom />
         <FooterMain />
      </div>
   );
}

export default App;
