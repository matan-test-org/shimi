import { BlaUpdateManyWithoutUsersInput } from "./BlaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  blas?: BlaUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
