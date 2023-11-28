import { useState } from 'react';
import getDataApi from '../services/api';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import '../styles/App.scss';
import WEATHER from './Weather';




function App() {
 

  const [weather, setWeather] = useState('');
  const [locate, setLocation] = useState('');



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



  return (
    <div >
      <Routes>
        <Route path='/'
          element={<Main />}>
        </Route>
        <Route path='/weather'
          element={<WEATHER weather={weather} locate={locate} lifting={lifting} onSubmit={onSubmit} />}>
        </Route>
      </Routes>
  </div>

)
}

export default App;
