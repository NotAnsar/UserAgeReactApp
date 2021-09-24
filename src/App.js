import React, { useState } from 'react';
import FormControl from './Component/Form/Form';
import ResultsList from './Component/ShowResults/ResultsList';

function App() {
	const USERS = [];
	const [user, setUsers] = useState(USERS);
	function getData(age, username) {
		setUsers(prev => {
			return [{ age, username, id: Math.random().toString() }, ...prev];
		});
	}

	function removeElement(id) {
		setUsers(prev => {
			const x = prev.filter(result => result.id !== id);
			return x;
		});
	}

	return (
		<div>
			<FormControl getResult={getData} />
			<ResultsList displayData={user} removeElement={removeElement} />
		</div>
	);
}

export default App;
