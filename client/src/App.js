import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyThumbnailList from './components/Thumnail/MyThumbnailList';
import './style/_reset.scss';
import './style/_global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/courses' element={<MyThumbnailList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
