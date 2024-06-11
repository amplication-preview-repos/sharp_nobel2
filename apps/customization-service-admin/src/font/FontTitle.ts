import { Font as TFont } from "../api/font/Font";

export const FONT_TITLE_FIELD = "name";

export const FontTitle = (record: TFont): string => {
  return record.name?.toString() || String(record.id);
};
