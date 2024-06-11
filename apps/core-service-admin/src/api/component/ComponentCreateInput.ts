import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ComponentCreateInput = {
  data?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
  typeField?: string | null;
};
