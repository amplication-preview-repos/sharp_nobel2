import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComponentWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  typeField?: StringNullableFilter;
};
