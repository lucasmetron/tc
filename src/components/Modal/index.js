import React from 'react';
import close from '../../assets/close.svg'
import * as S from './styled';

export default function Modal({
	isOpen = false,
	setIsOpen = () => {},
	isClose = () => {},
	btnClose = true,
	styleContent = {},
	...props
}) {
	return isOpen ? (
		<S.containerTransparendModal>
			<S.containerModal style={styleContent}>
				{btnClose ? (
					<S.closeModal
						type="button"
						onClick={() => {
							setIsOpen(false);
							isClose();
						}}
					>
						<img
							src={close}
							alt="botão de fechar"
							style={{ width: '10px' }}
						/>
					</S.closeModal>
				) : null}

				<S.content>
					{props.children || (
						<p className="notes">Não esqueça de passar o texto ;)</p>
					)}
				</S.content>

				
			</S.containerModal>
		</S.containerTransparendModal>
	) : null;
}
