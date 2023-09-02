import { Routes, Route, useLocation } from 'react-router-dom';
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
import PersonalTrainer from './components/personal-trainer';
import About from './components/about';
import SignUp from './components/signup';
import { useMemo } from 'react';
import Callanetics from './components/classes/callanetics';
import SportDances from './components/classes/sport-dances';
import CardioBoxing from './components/classes/cardio-boxing';
import BodyBuilding from './components/classes/bodybuilding';

function App() {
   const location = useLocation();
   const pathname = location.pathname || '';

   const isShowBottom = useMemo(() => {
      return pathname !== '/sign-up';
   }, [pathname]);

   return (
      <div className="App">
         <HeaderMain />
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/price-and-plan" element={<PriceAndPlan />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/cardio" element={<Cardio />} />
            <Route path="/classes/air-yoga" element={<AirYoga />} />
            <Route path="/classes/lifting" element={<Lifting />} />
            <Route path="/classes/press-and-back" element={<PressAndBack />} />
            <Route path="/classes/callanetics" element={<Callanetics />} />
            <Route path="/classes/sport-dances" element={<SportDances />} />
            <Route path="/classes/cardio-boxing" element={<CardioBoxing />} />
            <Route path="/classes/body-building" element={<BodyBuilding />} />
            <Route path="/personal-workouts" element={<PersonalTrainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
         </Routes>
         {isShowBottom && <Bottom />}
         <FooterMain />
      </div>
   );
}

export default App;
