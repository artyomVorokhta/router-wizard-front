import { Base } from './Base';
import { Client } from './Client';

export type AppealStatus = 'INITIATED' | 'ACCEPTED' | 'EXECUTED' | 'CLOSED';

export type Appeal = Base & {
  client: Client;
  status: AppealStatus;
};
