import Navbar from "./views/core/Navbar";

import Login from "./views/core/Login";
import Register from "./views/core/Register";

import CreateGraph from "./views/core/CreateGraph";
import YourGraphs from "./views/core/YourGraphs";

import Account from "./views/core/Account";
import AccountSettings from "./views/core/AccountSettings";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';

const App = () => (
    <Router>
      <div className="App text-sm">
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='/*' element={<UserContainer />} />
        </Routes>
      </div>
    </Router>
);

const UserContainer = () => (
  <>
  <Navbar />
    <Routes>
      <Route path="create-graph" element={<CreateGraph />} />
      <Route path="your-graphs" element={<YourGraphs />} />

      <Route path="account" element={<Account />} />
      <Route path="account-settings" element={<AccountSettings />} />
    </Routes>
  </>
)

export default App;