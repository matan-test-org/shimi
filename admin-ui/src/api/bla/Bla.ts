import { User } from "../user/User";

export type Bla = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
