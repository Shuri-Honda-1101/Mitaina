import './App.css';
import { useState, useEffect } from 'react';
import { getJSON } from './lib/EndpointHelper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Top from './pages/Top';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { LoggedInRoute } from './components/LoggedInRoute';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoggedInRoute component={<Top />} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
