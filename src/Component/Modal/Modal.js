import Button from '../Ui/Button';

const { default: styled } = require('styled-components');

const Card = styled.div`
	background: #fff;
	position: fixed;
	top: 30vh;
	left: 10%;
	width: 80%;
	overflow: hidden;
	z-index: 2;
	border-radius: 5px;
	@media (min-width: 768px) {
		& {
			left: calc(50% - 20rem);
			width: 40rem;
		}
	}
	& header {
		background: #212121;
		padding: 1rem;
	}

	header h2 {
		margin: 0;
		color: white;
	}

	& p {
		padding: 1rem;
		font-size: 1.2rem;
		font-weight: 500;
	}

	& footer {
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
	}
`;
const Overflow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 1;
	background: rgba(0, 0, 0, 0.75);
`;

function Modal(props) {
	return (
		<div>
			<Overflow onClick={props.OnConfirm}>
				<Card>
					<header>
						<h2>{props.title}</h2>
					</header>
					<div>
						<p>{props.message}</p>
					</div>
					<footer>
						<Button onClick={props.OnConfirm}>Close Modal</Button>
					</footer>
				</Card>
			</Overflow>
		</div>
	);
}
export default Modal;
