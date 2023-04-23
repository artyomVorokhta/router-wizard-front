import { useState } from 'react';

import { IconButton } from 'components/ui/icon-button/IconButton';
import { Table } from 'components/ui/table/Table';

import { Role } from 'types/common/role';
import { User } from 'types/entities/User';

import { roleOptions } from 'constants/role';

import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

const rowTitleList = ['Имя', 'Email', 'Телефон', 'Тип', 'Действия'];

export type UserTableProps = {
  users: User[];
  onPerson: (uuid: string) => void;
  onDelete: (uuid: string) => void;
};

export function UserTable({ users, onPerson, onDelete }: UserTableProps) {
  // const [tabsValue, setTabsValue] = useState<string>(Options.ALL);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const changeTab = (value: string) => setTabsValue(value);

  const changePage = (_: unknown, newPage: number) => setPage(newPage);

  const changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const roleLabelByValue = roleOptions.reduce(
    (acc, { value, label }) => ({ ...acc, [value]: label }),
    {} as Record<Role, string>,
  );

  const rows = users.map(({ uuid, name, email, phone, role }) => ({
    id: uuid,
    cells: [
      name,
      email,
      phone,
      roleLabelByValue[role],
      <>
        <IconButton component='button' onClick={() => onPerson(uuid)}>
          <PersonIcon />
        </IconButton>
        <IconButton component='button' onClick={() => onDelete(uuid)}>
          <DeleteIcon />
        </IconButton>
      </>,
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
      onPageChange={changePage}
      onRowsPerPageChange={changeRowsPerPage}
    />
  );
}
