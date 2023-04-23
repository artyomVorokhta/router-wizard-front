import { Option } from 'types/common/option';
import { AppealStatus } from 'types/entities/Appeal';

import { color } from 'themes';

export const statusOptions: Option<AppealStatus>[] = [
  {
    label: 'Создан',
    value: 'INITIATED',
  },
  {
    label: 'Принят',
    value: 'ACCEPTED',
  },
  {
    label: 'Закрыт',
    value: 'CLOSED',
  },
  {
    label: 'Выполнен',
    value: 'EXECUTED',
  },
];

export const colorByStatus: Record<AppealStatus, string> = {
  INITIATED: color.muted,
  ACCEPTED: color.primary,
  CLOSED: color.error,
  EXECUTED: color.success,
};
