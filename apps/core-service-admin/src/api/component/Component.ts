import { JsonValue } from "type-fest";
import { Page } from "../page/Page";

export type Component = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  page?: Page | null;
  typeField: string | null;
  updatedAt: Date;
};
