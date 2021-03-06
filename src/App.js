import React, { Fragment, useState } from 'react';
import FormControl from './Component/Form/Form';
import ResultsList from './Component/ShowResults/ResultsList';

function App() {
	const USERS = JSON.parse(localStorage.getItem('data')) || [];
	const [user, setUsers] = useState(USERS);

	function getData(age, username) {
		setUsers(prev => {
			const x = [{ age, username, id: Math.random().toString() }, ...prev];
			localStorage.setItem('data', JSON.stringify(x));
			return x;
		});
	}

	function removeElement(id) {
		setUsers(prev => {
			const x = prev.filter(result => result.id !== id);
			localStorage.setItem('data', JSON.stringify(x));
			return x;
		});
	}

	return (
		<Fragment>
			<FormControl getResult={getData} />
			<ResultsList displayData={user} removeElement={removeElement} />
		</Fragment>
	);
}

export default App;
