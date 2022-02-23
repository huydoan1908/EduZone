import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import MyCoursesList from './components/MyCourses/MyCoursesList'
import './style/_reset.scss';
import './style/_global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/courses' element={<MyCoursesList />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
