import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CountriesList from './component/CountriesList';
import RegionList from './component/RegionList';


function App() {
  return (
    <Router>
      <div className='App'>

        <Routes>
          <Route path="/countries" element={<RegionList />} />
          <Route path="/" exact element={<CountriesList />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
