import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import '../styles/App.scss';
import QuienesSomos from './QuienesSomos';
import Contactanos from './Contactanos';
import Protectoras from './Protectoras';
import Adopta from './Adopta';



function App() {
 
  const [facts, setFacts] = useState([]);
  const [weather, setWeather] = useState('');
  const [locate, setLocation] = useState('');


  useEffect(() => {
    getDataApi('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c15bf6397c974b5483077ceac297f5ec')
        .then(data => {
          setFacts(data.articles);
          console.log(data.articles);
        })
  }, []);

  /* useEffect(() => {
     getDataApi(`http://api.weatherapi.com/v1/current.json?key=5369b807e28c4747a4f121227232405&q=${locate}&aqi=yes`)
       .then(data => {
         setWeather(data.current.temp_c);
         console.log(data);
       })
   }, [locate]);*/

  const onSubmit = (locate) => {
    getDataApi(`http://api.weatherapi.com/v1/current.json?key=5369b807e28c4747a4f121227232405&q=${locate}&aqi=yes`)
      .then(data => {
        setWeather(data.current.temp_c);
        console.log(data);
      })
  }

  const lifting = (value) => {
    setLocation(value);
  }

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={` ${isHomePage ? 'full-background' : ''}`}>
      <Navbar />
      <Routes>
        <Route path='/'
          element={<Main />}>
        </Route>
        <Route path='/adopta'
          element={<Adopta />}>
        </Route>
        <Route path='/protectoras'
          element={<Protectoras facts={facts} />}>
        </Route>
        <Route path='/quienesSomos'
          element={<QuienesSomos weather={weather} locate={locate} lifting={lifting} onSubmit={onSubmit} />}>
        </Route>
        <Route path='/contactanos'
          element={<Contactanos />}>
        </Route>
      </Routes>
  </div>

)
}

export default App;
