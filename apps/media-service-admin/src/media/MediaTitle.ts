import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "typeField";

export const MediaTitle = (record: TMedia): string => {
  return record.typeField?.toString() || String(record.id);
};
