import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "views/core/Navbar";
import Sidebar from "views/core/sidebar/Sidebar";
import Login from "views/core/auth/login/Login";
import Register from "views/core/auth/register/Register";
import CreateGraph from "views/core/CreateGraph";
import YourGraphs from "views/core/YourGraphs";
import Account from "views/core/Account";
import AccountSettings from "views/core/AccountSettings";


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
  <div className="content flex w-full h-[calc(100vh-5rem)]">
    <Sidebar />
    <Routes>
      <Route path="create-graph" element={<CreateGraph />} />
      <Route path="your-graphs" element={<YourGraphs />} />

      <Route path="account" element={<Account />} />
      <Route path="account-settings" element={<AccountSettings />} />
    </Routes>
  </div>
  </>
)

export default App;