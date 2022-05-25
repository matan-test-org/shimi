import { UserCreateNestedManyWithoutBlasInput } from "./UserCreateNestedManyWithoutBlasInput";

export type BlaCreateInput = {
  users?: UserCreateNestedManyWithoutBlasInput;
};
