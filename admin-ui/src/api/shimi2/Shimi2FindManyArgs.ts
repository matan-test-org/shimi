import { Shimi2WhereInput } from "./Shimi2WhereInput";
import { Shimi2OrderByInput } from "./Shimi2OrderByInput";

export type Shimi2FindManyArgs = {
  where?: Shimi2WhereInput;
  orderBy?: Array<Shimi2OrderByInput>;
  skip?: number;
  take?: number;
};
