import { useState } from 'react';

import { IconButton } from 'components/ui/icon-button/IconButton';
import { Table } from 'components/ui/table/Table';

import { Appeal, AppealStatus } from 'types/entities/Appeal';

import { colorByStatus, statusOptions } from 'constants/status';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const rowTitleList = ['Имя', 'Email', 'Телефон', 'Роутер', 'Статус', 'Действия'];

export type AppealTableProps = {
  appeals: Appeal[];
  onStatus: (uuid: string) => void;
  onEdit: (uuid: string) => void;
  onDelete: (uuid: string) => void;
};

export function AppealTable({ appeals, onStatus, onEdit, onDelete }: AppealTableProps) {
  // const [tabsValue, setTabsValue] = useState<string>(Options.ALL);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const changeTab = (value: string) => setTabsValue(value);

  const changePage = (_: unknown, newPage: number) => setPage(newPage);

  const changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const statusLabelByValue = statusOptions.reduce(
    (acc, { value, label }) => ({ ...acc, [value]: label }),
    {} as Record<AppealStatus, string>,
  );

  const rows = appeals.map(({ uuid, client: { email, name, phone, router, createdAt }, status }) => ({
    id: uuid,
    cells: [
      name,
      email,
      phone,
      router,
      <div style={{ color: colorByStatus[status] }}>{statusLabelByValue[status]}</div>,
      <>
        <IconButton component='button' onClick={() => onEdit(uuid)}>
          <EditIcon />
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
