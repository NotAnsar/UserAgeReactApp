import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	margin: 2rem auto;
	@media (min-width: 768px) {
		& {
			width: 65%;
		}
	}
`;

export default Container;
