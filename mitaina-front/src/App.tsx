import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Top from './pages/Top';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { LoggedInRoute } from './auth/LoggedInRoute';
import { Suspense } from 'react';

function App() {
	return (
		<Suspense fallback={<div>loading</div>}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoggedInRoute component={<Top />} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
