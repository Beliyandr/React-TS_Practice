import '../App.css';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';
import { NavBar } from './components/navBar';
import { Routes, Route } from 'react-router-dom'
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
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:postId?' element={<Posts />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<p> not found</p>} />
      </Routes>




    </div>
  );
}

export default App;
