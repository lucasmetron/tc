import { tableTypes } from '../typesActions/types';
import { api } from '../../services/api'


export const reqDataTable = () => async  (dispatch) => {

await api
    .get("/users")
    .then((res) => {
		dispatch(dataTableSucess(res.data))
	})
    .catch(() =>{
		dispatch(dataTableFail())
	});
};

export const dataTableSucess = (value) => {
	return { type: tableTypes.SUCCESS_DATA_TABLE, payload: value };
};

export const dataTableFail = () => {
	return { type: tableTypes.FAIL_GET_DATA_TABLE };
};

