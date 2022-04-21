import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { setCountries } from './redux/reducer';
import Header from './component/Header';
import Home from './component/Home';
import RegionList from './component/RegionList';
import { setHeader } from './redux/headerReducer';

function App() {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(setCountries());
  }, []);
  useEffect(() => {
    dispatch(setHeader({ global_cases: countriesState.global_cases, img: 'https://mapsvg.com/maps/world.svg' }));
  }, [countriesState]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/:RegionsList" element={<RegionList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
