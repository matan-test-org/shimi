import { BlaCreateNestedManyWithoutUsersInput } from "./BlaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  blas?: BlaCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
