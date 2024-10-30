
import './index.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import MovieList from './Component/MovieList';

function App() {
  return (
    <>
      <div className='bg-black'>
        <Header />
        <Banner />
        <MovieList title={'Phim hot'} />
        <MovieList title={'Phim đề cử'} />
      </div>
    </>
  );
}

export default App;
