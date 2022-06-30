import styled from "styled-components";

export const containerTable = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;
	margin-top:10px ;
	padding-bottom: 20rem;
`;

export const table = styled.div`
	width: 50vw;
	height: 50vh ;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;