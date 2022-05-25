import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BlaWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
