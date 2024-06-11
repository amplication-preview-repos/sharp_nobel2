import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ComponentUpdateInput = {
  data?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
  typeField?: string | null;
};
