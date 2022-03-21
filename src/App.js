import Login from "./views/components/Login";
import Header from "./views/components/Header";
import CreateGraph from "./views/components/CreateGraph";
import Account from "./views/components/Account";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="create_graph" element={<CreateGraph />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
