import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SIngleArticle from './components/SIngleArticle';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router';
import NotFouns from './components/NotFouns';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/:id' element={<SIngleArticle/>} />
          <Route path='*' element={<NotFouns/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
