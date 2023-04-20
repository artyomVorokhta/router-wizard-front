import { AppealStatus } from 'types/entities/Appeal';

import { ClientUpdateDto } from '../client/update.dto';

export type AppealUpdateDto = Readonly<{
  uuid: string;
  client?: ClientUpdateDto;
  status?: AppealStatus;
}>;
