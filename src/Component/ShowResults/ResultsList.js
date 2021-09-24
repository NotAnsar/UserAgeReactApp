import Container from '../Ui/Container';
import ShowResults from './ShowResults';

function ResultsList(props) {
	return (
		<Container>
			{props.displayData.map(prop => {
				return (
					<ShowResults
						removeElement={props.removeElement}
						key={prop.id}
						id={prop.id}
						username={prop.username}
						age={prop.age}
					></ShowResults>
				);
			})}
		</Container>
	);
}
export default ResultsList;
