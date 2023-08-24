import { Routes, Route } from 'react-router-dom';
import './App.css';
import FooterMain from './components/footer';
import HeaderMain from './components/header';
import HomePage from './components/homepage';

function App() {
   return (
      <div className="App">
         <HeaderMain />
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
         </Routes>
         <FooterMain />
      </div>
   );
}

export default App;
