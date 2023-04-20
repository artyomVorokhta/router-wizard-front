import { AppealStatus } from 'types/entities/Appeal';

import { ClientCreateDto } from '../client/create.dto';

export type AppealCreateDto = Readonly<{
  client: ClientCreateDto;
  status?: AppealStatus;
}>;
