import './App.css';
import { useState, useEffect } from 'react';
import { getJSON } from './lib/EndpointHelper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Top from './pages/Top';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

//Types
import { User } from '@prisma/client';

function App() {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		const getUsers = async () => {
			const users: User[] | undefined = await getJSON('/users/get');
			console.log(users);
			users && setUsers(users);
		};
		getUsers();
	}, []);
	console.log(users);

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route
      exact
      path="/"
      element={<LoggedInRoute component={<Room />} />}
    /> */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Top />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
