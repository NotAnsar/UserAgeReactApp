import styled from 'styled-components';

const ShowResultsEl = styled.div`
	width: 100%;
	margin: 0.5rem auto;
	padding: 1rem;
	border-radius: 6px;
	background-color: #dadada;
	display: grid;
	grid-template-columns: 3fr 3fr 1fr;
	gap: 1rem;
	p {
		margin-left: 1rem;
	}

	& div {
		display: flex;
		align-items: center;
	}

	& div:last-child {
		cursor: pointer;
		color: red;
		justify-content: center;
	}
`;

function ShowResults(props) {
	function removeEL() {
		props.removeElement(props.id);
	}

	return (
		<ShowResultsEl>
			<div>
				<i className="fas fa-user"></i>
				<p>{props.username}</p>
			</div>
			<div>
				<i className="fas fa-user-clock"></i>
				<p>{props.age} Years Old</p>
			</div>
			<div onClick={removeEL}>
				<i className="fas fa-times fa-2x"></i>
			</div>
		</ShowResultsEl>
	);
}

export default ShowResults;
