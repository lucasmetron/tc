import { tableTypes } from '../typesActions/types';

const initialState = {
    tableData: [],
    isLoading: false,
    error: false,
    message: ''
};

export default function tableReducer(state = initialState, action) {
   
    switch (action.type) {
        case tableTypes.REQ_DATA_TABLE:
            return {
                ...state,
                tableData: [],
                isLoading: true,
                error: false,
                message: 'Buscando dados do desmatamento'
            };

        case tableTypes.SUCCESS_DATA_TABLE:
            return {
                tableData: action.payload,
                isLoading: false,
                error: false,
                message: 'Dados baixados com sucesso'
        };

		case tableTypes.FAIL_GET_DATA_TABLE:
			return {
				...state,
				tableData: [],
				isReq: false,
                error: true,
				message: 'Erro ao buscar por dados, tente novamente mais tarde'
			};
		default:
			return state;
	}
}
