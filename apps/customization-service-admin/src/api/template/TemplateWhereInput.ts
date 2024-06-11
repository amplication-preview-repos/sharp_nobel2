import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TemplateWhereInput = {
  css?: StringNullableFilter;
  description?: StringNullableFilter;
  html?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
