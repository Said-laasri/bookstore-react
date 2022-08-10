import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default App;
