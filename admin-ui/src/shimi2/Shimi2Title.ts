import { Shimi2 as TShimi2 } from "../api/shimi2/Shimi2";

export const SHIMI2_TITLE_FIELD = "id";

export const Shimi2Title = (record: TShimi2): string => {
  return record.id || record.id;
};
