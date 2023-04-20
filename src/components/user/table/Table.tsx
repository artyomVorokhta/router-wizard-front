import { useState } from 'react';

import { IconButton } from 'components/ui/icon-button/IconButton';
import { Table } from 'components/ui/table/Table';

import { Role } from 'types/common/role';
import { User } from 'types/entities/User';

import sx from './Table.styles';

import DeleteIcon from '@mui/icons-material/Delete';

const rowTitleList = ['Имя', 'Email', 'Телефон', 'Действия'];

export type UsersTableProps = {
  users: User[];
  onDelete: (uuid: string) => void;
};

export function UserTable({ users, onDelete }: UsersTableProps) {
  // const [tabsValue, setTabsValue] = useState<string>(Options.ALL);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const changeTab = (value: string) => setTabsValue(value);

  const changePage = (_: unknown, newPage: number) => setPage(newPage);

  const changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = users.map(({ uuid, name, email, phone, role }) => ({
    id: uuid,
    cells: [
      name,
      email,
      phone,
      <IconButton component='button' onClick={() => onDelete(uuid)}>
        <DeleteIcon />
      </IconButton>,
    ],
  }));

  // const tabs = {
  //   value: tabsValue,
  //   options: categories,
  //   onChange: changeTab,
  // };

  return (
    <Table
      // tabs={tabs}
      rowTitleList={rowTitleList}
      rows={rows}
      rowsPerPage={rowsPerPage}
      page={page}
      rowsPerPageOptions={[5, 10, 25]}
      onPageChange={changePage}
      onRowsPerPageChange={changeRowsPerPage}
    />
  );
}
