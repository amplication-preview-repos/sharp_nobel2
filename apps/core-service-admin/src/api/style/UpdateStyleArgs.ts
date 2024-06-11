import { StyleWhereUniqueInput } from "./StyleWhereUniqueInput";
import { StyleUpdateInput } from "./StyleUpdateInput";

export type UpdateStyleArgs = {
  where: StyleWhereUniqueInput;
  data: StyleUpdateInput;
};
