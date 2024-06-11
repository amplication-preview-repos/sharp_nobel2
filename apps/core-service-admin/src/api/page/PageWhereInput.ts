import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageWhereInput = {
  components?: ComponentListRelationFilter;
  content?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  website?: WebsiteWhereUniqueInput;
};
