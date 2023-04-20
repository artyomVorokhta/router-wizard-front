import { Base } from './Base';

export type Client = Base & {
  name: string;
  email: string;
  phone: string;
  router: string;
};
