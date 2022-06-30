import styled from 'styled-components';



export const containerTransparendModal = styled.div`
	font-family: nunito;

	@keyframes entrada {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
	animation-name: entrada;
	animation-duration: 1s;
	background-color: rgba(0, 0, 0, 0.85);
	overflow: hidden;
`;

export const containerModal = styled.div`
	position: relative;
	max-width: 88%;
	max-height: 88%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: 10px;
	background-color: white;

	@media (max-width: 624px) {
		width: 80%;
	}
`;

export const content = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: auto;
	display: content;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	p {
		font-family: nunito;
	}
`;

export const closeModal = styled.button`
	padding: 15px;
	width: 40px;
	height: 40px;
	position: absolute;
	top: -15px;
	right: -15px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #EC5B5B;
	cursor: pointer;
	button {
		background-color: transparent;
		color: white;
		cursor: pointer;
	}

`;
