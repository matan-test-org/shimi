import { Bla } from "../bla/Bla";

export type User = {
  blas?: Array<Bla>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
