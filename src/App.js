import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountriesList from './component/CountriesList';
import RegionList from './component/RegionList';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/countries" element={<RegionList />} />
          <Route path="/" exact element={<CountriesList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
