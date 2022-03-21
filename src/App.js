import Login from "./views/layout/Login";
import Header from "./views/layout/Header";
import CreateGraph from "./views/layout/CreateGraph";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="create_graph" element={<CreateGraph/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
