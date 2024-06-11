import { Component } from "../component/Component";
import { JsonValue } from "type-fest";
import { Website } from "../website/Website";

export type Page = {
  components?: Array<Component>;
  content: JsonValue;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  website?: Website | null;
};
