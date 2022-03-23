import Header from "./views/components/Header";

import Login from "./views/components/Login";
import Register from "./views/components/Register";

import CreateGraph from "./views/components/CreateGraph";
import YourGraphs from "./views/components/YourGraphs";

import Account from "./views/components/Account";
import AccountSettings from "./views/components/AccountSettings";

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
  <Header />
  <Routes>
    <Route path="create-graph" element={<CreateGraph />} />
    <Route path="your-graphs" element={<YourGraphs />} />

    <Route path="account" element={<Account />} />
    <Route path="account-settings" element={<AccountSettings />} />
  </Routes>
  </>
)

export default App;