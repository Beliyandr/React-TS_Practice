import '../App.css';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';
import { NavBar } from './components/navBar';
import { Routes, Route, Switch } from 'react-router-dom'
import { Posts } from './components/posts';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>
        APP
      </h1>
      <Routes >

        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/posts' element={<Posts />} />



      </Routes>


    </div>
  );
}

export default App;
