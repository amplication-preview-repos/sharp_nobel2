import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pages?: PageListRelationFilter;
  published?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
