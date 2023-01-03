// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NotFound from './components/NotFount.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* 註冊路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello World
        </a>
      </header> */}
    </div>
  );
}

export default App;
