import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StyleWhereInput = {
  css?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
