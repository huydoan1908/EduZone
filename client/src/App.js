import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './style/_reset.scss';
import './style/_global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/courses' element={<h1>All Course</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
