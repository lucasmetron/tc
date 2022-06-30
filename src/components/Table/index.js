import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import { reqDataTable } from "../../store/actions/tableAction";
import { returnCompanyName } from "../../helpers/utils";
import * as S from "./styled";
import Modal from "../Modal";

export default function Table() {

  const dispatch = useDispatch();
  
  const {
    tableData: list,
    isLoading,
  } = useSelector((state) => state.table);

  const [rows, setRows] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  useEffect(() => {
    dispatch(reqDataTable());
  }, []);

  useEffect(() => {
    if (list && list.length > 0) {
      const newRows = list.map((item, id) => {
        const { name, email, phone, address, company } = item;

        const adressComplete = `${address.street} ${address.suite} ${address.zipcode}`;
        const companyName = returnCompanyName(company.name);

        return {
          id,
          name,
          email,
          phone,
          adressComplete,
          city: address.city,
          companyName,
        };
      });

      setRows(newRows);
    }
  }, [list]);

  const columns = [
    { field: "name", headerName: "Nome", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Telefone", width: 180 },
    { field: "adressComplete", headerName: "Endereço Completo", width: 300 },
    { field: "city", headerName: "Cidade", width: 150 },
    { field: "companyName", headerName: "Empresa", width: 150 },
  ];

  return (
    <S.containerTable>
      <S.table>
        {isLoading ? (
          <p> carregando</p>
        ) : (
          <DataGrid
            rows={rows || []}
            columns={columns || []}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={(item) => {
              setItemSelected(item.row);
              setIsOpenModal(true);
            }}
          />
        )}

        <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
          <p>O id do usuário é {itemSelected.id} </p>
          <p> O nome do usuário é {itemSelected.name}</p>
        </Modal>
      </S.table>
    </S.containerTable>
  );
}
