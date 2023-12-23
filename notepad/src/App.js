// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NotesList from './pages/NotesList'
import NotePage from './pages/NotePage'
function App() {
  return (
    <div className="container dark">
      <Router>
        <div className="app">
          <Header/>
          <Routes>
          {/* Notes list contains all the notes */}
          <Route path='/' element={<NotesList />} />
          {/* NotePage Contains one specific Note  */}
          <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
