import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { setCountries } from './redux/reducer';
import Header from './component/Header';
import Home from './component/Home';
import RegionList from './component/RegionList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries());
    return () => {

    };
  }, []);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path='/:RegionsList' element={<RegionList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
