import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaWhereInput = {
  id?: StringFilter;
  size?: IntNullableFilter;
  typeField?: StringNullableFilter;
  uploadedBy?: StringNullableFilter;
  url?: StringNullableFilter;
};
