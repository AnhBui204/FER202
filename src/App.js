
import './index.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import MovieList from './Component/MovieList';
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <div className='bg-black'>
        <Header />
        <Banner />
        <MovieList title={'Phim hot'} />
        <MovieList title={'Phim đề cử'} />
      </div> */}
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          {/* <Route path='/HomePage' element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
