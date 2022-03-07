import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyCoursesList from './components/MyCourses/MyCoursesList'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'
import CourseDetail from './components/MyCourses/CourseDetail'
import './style/_reset.scss';
import './style/_global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/courses" element={<MyCoursesList />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
