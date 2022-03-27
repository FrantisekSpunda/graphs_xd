import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from 'views/Navbar';
import Sidebar from 'views/sidebar/Sidebar';
import Login from 'views/auth/login/Login';
import Register from 'views/auth/register/Register';
import CreateGraph from 'views/CreateGraph';
import YourGraphs from 'views/YourGraphs';
import Account from 'views/Account';
import AccountSettings from 'views/AccountSettings';

const App = () => (
	<Router>
		<div className='App text-sm'>
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='/*' element={<UserContainer />} />
			</Routes>
		</div>
	</Router>
);

const UserContainer = () => (
	<>
		<Navbar />
		<div className='content flex w-full h-[calc(100vh-5rem)]'>
			<Sidebar />
			<Routes>
				<Route path='create-graph' element={<CreateGraph />} />
				<Route path='your-graphs' element={<YourGraphs />} />

				<Route path='account' element={<Account />} />
				<Route path='account-settings' element={<AccountSettings />} />
			</Routes>
		</div>
	</>
);

export default App;
