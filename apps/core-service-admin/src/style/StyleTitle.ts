import { Style as TStyle } from "../api/style/Style";

export const STYLE_TITLE_FIELD = "name";

export const StyleTitle = (record: TStyle): string => {
  return record.name?.toString() || String(record.id);
};
